---
layout: full
title: The Enemy of my Enemy is my Friend Theory
hero_title: The Enemy of my Enemy is my Friend Theory
hero_subtitle: A sitcom-style journey through alliances and rivalries on Reddit
---

# Pilot – Cold open {#intro}

> **INT. APARTMENT 4A – NIGHT**  
> Leonard’s whiteboard is covered in equations and a huge messy graph.

**LEONARD** (network nerd):  
> “Okay, serious scientific question: if two subreddits bully the same subreddit… are they basically best friends now?”

**SHELDON** (theorist, takes everything too seriously):  
> “Of course. I shall now formally name this principle *The Enemy of my Enemy is my Friend Theory*. It is mine. Dibs.”

**RAJ** (NLP geek):  
> “Yeah, because no one in human history ever thought of that before…”

**PENNY** (outsider, from literally not STEM):  
> “Wait, you can test that with *data*? I thought that was just something villains say in movies.”

**SHELDON:**  
> “We can, provided the universe offers us three essential components:  
> 1. A large population of semi-cooperative agents.  
> 2. Public records of their conflicts.  
> 3. An alarming amount of free time.”

**LEONARD:**  
> “Good news, Sheldon. We have Reddit and your social life.”

---

# Scene 1 – Building the “social collider” (the data) {#dataset}

> **INT. APARTMENT 4A – LATER**  
> The whiteboard now shows a huge graph. Nodes, arrows, chaos, and a badly drawn Reddit logo.

**LEONARD:**  
> “Here is our universe: each node is a subreddit, and each arrow is a post where one subreddit talks about another.”

They model each interaction as:

- **Source subreddit** → where the post lives  
- **Target subreddit** → who is mentioned or linked  
- **Timestamp** → when the drama happened  
- **Sentiment label** → negative or non-negative

**PENNY:**  
> “Non-negative? So, what, ‘friendly or just not obviously evil’?”

**RAJ:**  
> “Exactly. The original model merges ‘neutral’ and ‘positive’. Great for speed, terrible for sarcasm and passive-aggressiveness.”

The limitations go on the board:

1. Classifier accuracy ≈ 0.8, trained on only 1,020 labelled posts.  
2. Neutral + positive squashed into one class.  
3. Implicit hostility, irony, inside jokes → often mislabelled.

**SHELDON:**  
> “Which means some of these cheerful blue arrows are actually red. They’re just… *undercover red*.”

---

## 1. A first look at Reddit’s galaxy

Leonard pulls up an **interactive network map** of the subreddit universe:

- nodes = subreddits  
- red edges = mostly **negative** interactions  
- blue edges = mostly **non-negative** interactions  
- node size = total outgoing interactions

**PENNY:**  
> “Wow. That big red blob… I’m guessing politics?”

**LEONARD:**  
> “Highly connected, highly hostile. Fandom communities are much bluer and more cozy internally.”

To go beyond pure structure, Raj introduces **embeddings**:

- each subreddit → 300-dimensional vector capturing user-base and topical similarity,  
- projected into 2D, they form clear clusters: politics, gaming, memes, lifestyle…

**SHELDON:**  
> “Excellent. These embeddings will serve as our *social metric tensor* — they tell us which communities were naturally close *before* we even mention enemies.”

**RAJ:**  
> “Hold that thought. If our labels are wrong, any ‘enemy-of-my-enemy’ analysis becomes science fiction.”

**PENNY:**  
> “So first you’re doing… what, therapy for your dataset?”

---

# Scene 2 – Hidden hostilities: The Case of the Smiling Enemy {#triads}

> **INT. APARTMENT 4A – WHITEBOARD CORNER**  
> Three timelines are drawn, with red and blue arrows marking sentiment between pairs of subreddits.

**SHELDON:**  
> “Phase one of The Enemy of my Enemy is my Friend Theory:  
> *Thou shalt not build causal claims on mislabeled insults.*”

**LEONARD:**  
> “Translation: step 1 = find the fake smiles.”

They attack the problem from three angles: **time**, **language**, and **context**.

---

## 2.1 Time – Mood swings that make no sense

For each ordered pair (A, B), Leonard looks at the sequence of interactions A → B over time:

- mostly **negative** edges (red),  
- and occasionally a single **non-negative** edge (blue) squeezed between reds.

**LEONARD:**  
> “If two subreddits scream at each other for months, and suddenly we get one ‘non-negative’ message *exactly* between two fights… I’m not buying the instant reconciliation arc.”

They compute:

- the typical delay between sentiment switches for each pair,  
- and the actual delays around these suspicious non-negative edges.

When a flip from negative → non-negative → negative happens **much faster** than usual for that pair, the middle edge is flagged as a **temporal suspect**.

**PENNY:**  
> “So if someone says ‘no offence, but…’ right between two insults, you assume it’s not a real hug?”  

**SHELDON:**  
> “Yes. We call that the *Law of Sarcasm Conservation*.”

---

## 2.2 Language – When “non-negative” swears a lot

Raj turns to the text itself.

For each post, he computes:

- **VADER compound** sentiment score;  
- LIWC-type features: *Anger*, *Swear*, *Dissent*, *You/They* pronouns.

He compares the distributions for:

- posts labelled **negative**,  
- posts labelled **non-negative**.

As expected:

- negative posts have lower VADER and higher anger/swearing;  
- but a small tail of “non-negative” posts looks **just as angry** as the negative ones.

**RAJ:**  
> “Check this out. The model saw ‘you idiots’ and thought: ‘seems neutral’.”

Those linguistic outliers become **language suspects**, especially when they also belong to the temporal-suspect set.

---

## 2.3 Context – Hostility in embedding space

**SHELDON:**  
> “Hostility is relational. Two similar communities can tease each other nicely. Distant ones are more likely to declare war.”

Using subreddit embeddings, they compute cosine similarity between the source and target of each interaction.

Empirically:

- negative interactions tend to occur between **less similar** communities,  
- non-negative interactions are more common between **similar** ones.

They then inspect the suspect edges:

- if an allegedly non-negative post  
  - looks linguistically hostile,  
  - appears between negative posts in time,  
  - and connects two far-apart communities,

then it becomes a strong **hidden hostility candidate**.

**LEONARD:**  
> “If it quacks like an insult, swears like an insult, and flies between enemy camps, it’s probably… an insult.”

**PENNY:**  
> “Is that how science works? You should put that on your grant proposals.”

---

## 2.4 Outcome – A cleaner map of grudges

They don’t manually relabel the entire dataset, but they:

- identify a non-trivial share of “non-negative” edges that behave like negative ones,  
- understand where the classifier tends to fail,  
- and can rerun analyses with and without these suspects to check robustness.

**SHELDON:**  
> “We have now debugged our enemies. The Enemy of my Enemy is my Friend Theory may proceed to Phase Two: measuring alliances.”

**PENNY:**  
> “So phase one was: ‘trust issues’. Phase two is: ‘dating drama’?”

---

# Scene 3 – The Experiment: Testing The Enemy of my Enemy is my Friend Theory {#results}

> **INT. APARTMENT 4A – EVEN MORE WHITEBOARD**  
> The board now shows triangles: A, B, C with arrows pointing to C, and little hearts between A and B.

**PENNY:**  
> “Okay, Professor Crazy, remind me what exactly you’re trying to prove.”

**SHELDON:**  
> “Formal statement: for communities A, B, C,  
> if A and B both attack C, does that increase the probability that A and B later interact positively with each other?”

**LEONARD:**  
> “In human terms: co-attack → friendship boost?”

---

## 3.1 Descriptive evidence – Before and after the feud

For each month and each target C, Leonard counts negative interactions A → C and B → C.  
If both A and B attack C in the same month, they **co-attack** C.  
The first such month is recorded as `conflict_start`.

Then, for each pair (A, B), they track mutual positive interactions A ↔ B:

- in a window before `conflict_start`,  
- and in a window after.

A plot fills the screen.

**RAJ:**  
> “See this curve? Before the shared conflict, most pairs interact positively almost never. After they start co-attacking… the positive links clearly tick up.”

Compared to random pairs of subreddits that never co-attack:

- co-attacking pairs show a noticeably larger increase in mutual positive interactions after conflict.

**PENNY:**  
> “So basically, online version of: ‘we bonded over making fun of the same person’.”

**LEONARD:**  
> “Exactly. But Sheldon is about to say ‘confounding variables’.”

**SHELDON:**  
> “Confounding variables.”

---

## 3.2 Causal design – Treated vs control pairs

They define:

- **Treated pairs:** subreddit pairs (A, B) that co-attack at least one C and were not friends before `conflict_start`.  
- **Control pairs:** similar pairs that never co-attack anyone and also had no prior friendship.

To make them comparable, they match on three **confounders**:

1. **Topical similarity**  
   Cosine similarity between embeddings of A and B.

2. **Activity level**  
   Logarithm of total outgoing interactions (how talkative they are).

3. **Aggressiveness**  
   Ratio of negative to total outgoing interactions.

**LEONARD:**  
> “So each treated pair gets a twin: same theme, same activity, same tendency to fight… but no shared enemy.”

They estimate a **propensity score** for each pair – probability of co-attacking given the confounders – and use nearest-neighbour matching.

**RAJ:**  
> “After matching, the treated and control groups look almost identical on those three features. Which is exactly what we want.”

**PENNY:**  
> “So if there’s still more friendship after co-attack, we’re running out of excuses not to blame the co-attack itself.”

---

## 3.3 Measuring the “friendship boost”

For each pair (treated or control), they compute:

- mutual positive interactions before conflict,  
- mutual positive interactions after conflict,  
- and Δfriendship = after − before.

They then compare average Δfriendship across groups.

**LEONARD:**  
> “Here’s the punchline: treated pairs show a significantly larger friendship increase than their matched controls.”

**PENNY:**  
> “So your theory is: ‘we roast the same subreddit, we become buddies’.”

**SHELDON:**  
> “A crude but acceptable paraphrase. Empirically, shared enemies *do* seem to foster alliances, even after controlling for similarity, activity, and aggressiveness.”

---

## 3.4 Sensitivity analysis – How strong is the theory?

**PENNY:**  
> “But what if there’s some totally invisible factor? Like, I don’t know, charismatic mods playing puppet-masters?”

**SHELDON:**  
> “Enter Rosenbaum’s sensitivity analysis. It answers the question: *how strong would an unmeasured bias have to be to erase the observed effect?*”

They introduce parameter Γ (Gamma):

- Γ = 1 → no hidden bias, matching assumptions hold perfectly.  
- Γ > 1 → treated and control pairs may differ in their odds of treatment due to some unseen factor.

For each Γ, they recompute upper and lower bounds on the p-value of the treatment effect, and see up to which Γ the effect remains statistically significant.

Depending on the actual results, you’ll adapt something like:

> **LEONARD:**  
> “Our effect remains significant up to Γ ≈ …, meaning a hidden factor would have to change the odds of co-attacking by about …% to fully explain it away.”

If Γ is high → the proverb looks robust.  
If Γ is low → the theory is charming but fragile.

**RAJ:**  
> “So the theory survives… unless the universe secretly rigs the matchmaking.”

---

# Finale – The Enemy of my Enemy is my Friend Theory, evaluated {#conclusion}

> **INT. APARTMENT 4A – NIGHT, LATER**  
> The whiteboard is full, everyone has pizza. Sheldon looks like he’s about to present a Nobel lecture.

**PENNY:**  
> “Okay, Doctor Doom, what’s the verdict? Is your grand theory real or just Reddit fan-fiction?”

**SHELDON:**  
> “Allow me to summarise.”

1. **Hidden hostilities are real.**  
   A noticeable fraction of interactions labelled “non-negative” behave like genuine insults when we look at their temporal patterns, linguistic features and embedding context.  
   These hidden hostilities distort the map of conflicts if we ignore them.

2. **Shared enemies do foster alliances – on average.**  
   Pairs of subreddits that co-attack the same target show a larger increase in mutual positive interactions than comparable pairs that never share an enemy.  
   After matching on similarity, activity and aggressiveness, the pattern is consistent with a *causal* effect of co-attack on later friendship.

3. **But the theory is probabilistic, not a law of physics.**  
   Sensitivity analysis shows how strong an unobserved bias would need to be to erase the effect.  
   The proverb does not apply deterministically to every trio A, B, C, but across Reddit as a whole, it captures a real tendency:  
   **shared conflicts often bring communities closer.**

**RAJ:**  
> “So The Enemy of my Enemy is my Friend Theory passes peer review… with a big asterisk.”

**LEONARD:**  
> “And season 2 can look at when those new friendships fall apart again.”  

**PENNY:**  
> “Let me guess. You’re going to call it ‘The Ex-Friend of my Friend is my Enemy Theory’.”

**SHELDON:**  
> “Obviously.”

> **FADE OUT.**

And that’s how a proverb from geopolitics, a network of noisy subreddits, and four scientists with way too much whiteboard space turned into **The Enemy of my Enemy is my Friend Theory**.
