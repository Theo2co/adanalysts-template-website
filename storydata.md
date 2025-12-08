---
layout: full
title: Datastory
hero_title: Is the Enemy of my Enemy my Friend?
hero_subtitle: A data story on alliances, rivalries and fragile friendships on Reddit
---

# Introduction {#intro}

Imagine Reddit as a giant city.

Each subreddit is a neighbourhood with its own culture, memes and unwritten rules.  
Most of the time, these neighbourhoods mind their own business. But sometimes they look over the fence: they praise another community, mock it, or directly attack it.

If we treat each subreddit as a node, and each mention of one subreddit by another as a link, Reddit suddenly looks like a **social network of alliances and rivalries**.  
Some links are positive – *“go check out r/… they are awesome”* – while others are clearly hostile – *“look at what those clowns on r/… did again”*.

In international relations there is a famous proverb:

> **“The enemy of my enemy is my friend.”**

Our project asks whether a similar logic holds for **online communities**:

- Do subreddits that attack the same target tend to become friends?
- Or do they just share a moment of coordinated outrage and then go back to ignoring each other?

There is one big complication:  
all our conclusions depend on the **sentiment labels** that say whether an interaction is positive or negative.  
These labels come from a model trained on just over a thousand manually coded posts, with an accuracy of about 80%, and that merges “neutral” with “positive”.  
Sarcasm, coded insults or context-dependent jokes are very easy to mislabel.

So our datastory naturally splits into two acts:

1. **Act I – Hidden hostilities.**  
   Can we detect interactions that look friendly in the data but actually behave like insults?

2. **Act II – Enemy of my enemy.**  
   Once we trust the hostility labels more, does co-attacking a common target *causally* increase the chance that two communities become friends?

We use Reddit as a laboratory, building a **temporal, sentiment-labelled network of inter-subreddit interactions**, enriched with 300-dimensional embeddings that capture how similar two communities are in topics and user base.  
Throughout the story, we will use an interactive map to show how relations evolve over time and where new alliances appear.

---

# Dataset – Mapping Reddit’s battlefield {#dataset}

Before looking for hidden grudges or forged alliances, we need to understand the playground.

## Inter-community interactions

Our starting point is a dataset of posts where one subreddit **links to another**.  
Each interaction is a directed edge:

- **source**: the subreddit where the post is made,
- **target**: the subreddit that is mentioned or linked,
- **timestamp**: when the post was created,
- **sentiment label**: negative vs non-negative, assigned by a pretrained model.

Intuitively:

- A **negative** edge A → B means “A is attacking or mocking B”.
- A **non-negative** edge A → B includes genuinely positive references but also neutral ones and potentially sarcastic attacks that the model failed to catch.

Over the full period, the network contains:

- *…* subreddits (nodes),
- *…* directed interactions (edges),
- spanning from *year* to *year*.

(*Fill in the actual numbers from your analysis.*)

## A first look at alliances and rivalries

To get a feeling for the structure, we aggregate interactions over time and draw the inter-subreddit network:

- blue edges represent mostly **positive** interactions;
- red edges represent mostly **negative** interactions;
- node size is proportional to the total number of outgoing interactions.

We immediately see a few patterns:

- some subreddits act as **hubs**, talking to many others;
- political or ideology-driven communities form dense, often hostile clusters;
- fandom and hobby subreddits are more positive and internally cohesive.

We complement the network with **subreddit embeddings**: 300-dimensional vectors where closeness reflects shared users and topics.  
A 2D projection of these embeddings shows clear thematic regions – politics, gaming, sports, memes – confirming that the embedding space captures meaningful community structure.

These embeddings will later help us distinguish between “natural friends” (already similar communities) and alliances that truly emerge from shared conflict.

---

# Hidden hostilities – When smiles hide grudges {#triads}

Our data labels each interaction as either negative or non-negative, but several features suggest that some “friendly” looking edges might actually be **hostile**:

- the model was trained on a small labelled set (1,020 posts),
- neutral and positive are merged,
- implicit aggression, irony or coded slurs are hard to detect.

In this section we look for **hidden hostilities**:  
non-negative interactions that behave suspiciously like insults.

We approach the problem from three complementary angles.

## 1. Temporal inconsistencies

First, we analyse how sentiment between a pair of communities evolves over time.

For each ordered pair (A, B), we look at the sequence of interactions A → B.  
If almost all of them are negative, but one isolated interaction is labeled non-negative **right before or after** a negative one, we mark it as suspicious.

Intuition:

> if r/A usually fights with r/B, a single “friendly” message sandwiched between two attacks is likely not a genuine peace gesture.

We compare:

- the typical delay between sentiment switches (negative → non-negative and vice versa),
- to the delays observed around these suspicious edges.

Edges that flip sentiment **much faster than usual** are strong candidates for mislabeling.

A small number of pairs behave like this systematically:  
their relation is dominated by negativity, but the dataset occasionally records lone non-negative posts that look more like anomalies than real mood swings.

## 2. Linguistic red flags

Temporal anomalies are suggestive, but we also want to look directly at the **text**.

For each post we compute a set of linguistic features:

- **VADER compound score** (overall polarity),
- LIWC categories related to hostility and outgroup targeting:
  - *Anger*, *Swear*, *Dissent*, *You/They* pronouns.

We then compare the distributions of these features for:

- genuinely **negative** interactions,
- supposedly **non-negative** ones.

As expected, negative posts have:

- lower VADER scores,
- higher anger, swearing and outgroup references.

However, we find a tail of “non-negative” posts that look **indistinguishable from the negative ones**:  
their VADER score is strongly negative and they use a lot of swear words or “you/they” pronouns.

These posts become our second set of hidden hostility candidates.

## 3. Embedding-based consistency

Hostility also depends on **who** is talking to whom.  
Two communities that are already ideologically opposed or far apart in embedding space are more likely to clash.

We therefore look at cosine similarity between subreddit embeddings for:

- negative interactions,
- non-negative interactions.

Negative interactions tend to occur between **less similar** communities, while non-negative ones are more frequent between close neighbours in embedding space.

We then inspect our hidden hostility candidates from the temporal and linguistic analyses:

- candidates whose embedding similarity looks closer to that of truly negative interactions are more likely to be mislabels.

## What we learn

Across these three lenses, we identify a non-trivial fraction of non-negative edges that look **temporally**, **linguistically** and **structurally** hostile.

This does not mean we can relabel every single one with certainty, but it gives us:

- a cleaner view of where hostility really flows in the network,
- and more confidence that the “enemy” relations we rely on in the next section are not dominated by model errors.

With this refined picture of inter-community conflicts, we can finally turn to our main question:  
**does attacking the same target turn enemies of enemies into friends?**

---

# Enemy of my enemy – Do shared targets forge alliances? {#results}

We now move to the core proverb:

> When two subreddits A and B both attack a third subreddit C,  
> **does this make A and B more likely to become friends?**

We study this in three steps: descriptive patterns, causal inference with matching, and robustness checks.

## 1. Descriptive co-attack patterns

For every month and every target community C, we count:

- the number of negative interactions A → C for each source A,
- the number of negative interactions B → C for each source B.

Whenever two communities A and B both attack C within the same month, we say they **co-attack** C.  
For each triplet (A, B, C), we record the first month when this happens as `conflict_start`.

We then track positive interactions between A and B:

- in a window **before** `conflict_start`,
- and in a window **after**.

On average, we observe that pairs of subreddits that start co-attacking a target:

- increase their positive interactions more after the conflict than before,
- and do so more than random pairs of subreddits that never co-attack anyone.

This suggests a *hint* of the proverb in action:  
co-attack often coincides with the emergence of new friendly ties.

However, this pattern could still be explained by **pre-existing similarities**:

- two political subreddits with similar ideology are both likely to attack the same opponents *and* to eventually talk positively to each other,
- even if the co-attack itself does not *cause* the later friendship.

To answer the causal question, we need a more careful design.

## 2. Matching treated and control pairs

We treat “co-attacking a common enemy” as a **treatment**.

- **Treated pairs**: subreddit pairs (A, B) that co-attack at least one target C, without having been friends before `conflict_start`.
- **Control pairs**: subreddit pairs that **never co-attack anyone** and were also not friends before the same time horizon.

To make treated and control pairs comparable, we match them on three confounders:

1. **Topical similarity**  
   Cosine similarity between the embeddings of A and B.  
   Communities with similar topics are more likely to both attack the same targets and to become friends anyway.

2. **Activity level**  
   Log of total outgoing interactions of A and B.  
   Very active subreddits simply have more chances to talk to everyone.

3. **Aggressiveness**  
   Ratio of negative to total outgoing interactions.  
   Highly aggressive communities are more likely to attack others, independent of shared enemies.

We estimate for each pair a **propensity score**: the probability of being treated (co-attacking) given these confounders, using logistic regression.  
Then we use nearest-neighbour matching to pair each treated pair with one or several control pairs that have similar propensity scores.

After matching, the distributions of similarity, activity and aggressiveness become well aligned between treated and control groups, reducing confounding.

## 3. Does co-attack increase friendship?

For each pair (treated or control), we measure:

- the number of mutual positive interactions A ↔ B in a window **before** the (real or pseudo) conflict start,
- and in a window **after**.

Their difference is the **change in friendship** Δfriendship.

We then compare the average Δfriendship between:

- matched treated pairs (co-attack),
- matched control pairs (no co-attack).

Our results show that:

- treated pairs experience a **larger increase** in positive interactions than their matched controls,
- the difference is statistically significant under our model assumptions.

In other words, once we control for how similar, active and aggressive pairs are, **sharing a common enemy still makes them more likely to become friends later**.

This provides evidence in favour of a **causal version** of the proverb on Reddit.

## 4. How robust is this effect?

Of course, our matching cannot control for everything.  
There could be hidden factors we do not observe – moderation style, external events, cross-platform coordination – that affect both the tendency to co-attack and the tendency to befriend.

To assess robustness, we run a **Rosenbaum sensitivity analysis** on the matched pairs.

The idea is to introduce a parameter Γ (Gamma) that quantifies how much an unobserved factor could tilt the odds of receiving the treatment.  

- Γ = 1 means “no hidden bias” – the world we assumed in our matching.
- Γ > 1 allows treated and control pairs to differ in unobserved ways.

For each Γ, we recompute upper and lower bounds on the p-value of the estimated treatment effect.

Depending on your actual results, you can conclude for example:

- **Robust effect**  
  > The effect remains significant up to Γ ≈ 2, meaning a hidden factor would have to *double* the odds of co-attacking for some pairs to fully explain it away.

- **Sensitive effect**  
  > The effect becomes non-significant already around Γ ≈ 1.1, indicating that a relatively mild hidden bias could account for our findings.

(*Adapt this paragraph to match your real Γ threshold.*)

Either way, the sensitivity analysis tells us how far we can trust our “enemy of my enemy” conclusion before unobserved forces might take over.

---

# Conclusion – So, is the enemy of my enemy my friend? {#conclusion}

Let’s return to our initial question.

On Reddit, we find that:

1. **Some smiles really hide grudges.**  
   By combining temporal patterns, linguistic markers and community embeddings, we uncover a meaningful subset of “non-negative” interactions that behave like genuine hostilities.  
   Accounting for these hidden hostilities gives a clearer picture of which communities are truly at odds.

2. **Shared enemies are linked to new alliances.**  
   Pairs of subreddits that start co-attacking the same target tend to see a stronger increase in mutual positive interactions afterwards than similar pairs that never co-attack.  
   After matching on topical similarity, activity and aggressiveness, this difference points towards a *causal* effect of shared conflict.

3. **But alliances remain messy.**  
   Sensitivity analysis shows that unobserved factors could still play a role.  
   Our results suggest that the proverb often holds in aggregate, but it is not a deterministic law: not every co-attack leads to friendship, and not every friendship starts with a common enemy.

More broadly, this project shows how **network analysis, NLP and causal inference** can be combined to study the dynamics of online communities.  
Reddit, like the real world, is full of fragile friendships, temporary coalitions and long-lasting rivalries.  

The enemy of my enemy can indeed become my friend –  
but on Reddit, as in geopolitics, the story is always a bit more complicated.
