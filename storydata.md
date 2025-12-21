---
layout: full
title: The Enemy of my Enemy is my Friend Theory
hero_title: The Enemy of my Enemy is my Friend Theory
hero_subtitle: A sitcom-style journey through alliances and rivalries on Reddit
---

# Pilot {#intro}

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      INT. APARTMENT 4A – NIGHT. Leonard’s whiteboard is covered in equations
      and one huge messy graph. Our four data nerds are about to turn a proverb
      into something you can actually test with Reddit.
    </p>
  </div>
</div>

<figure class="scene-figure scene-figure-intro">
  <img src="{{ '/assets/img/scene-int-4a.png' | relative_url }}"
       alt="Leonard's whiteboard covered in equations and a huge messy graph, in Apartment 4A at night.">
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · network nerd</div>
      <p>Okay, serious scientific question: if two subreddits bully the same subreddit… are they basically best friends now?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · theorist</div>
      <p>Of course. I shall now formally name this principle <em>The Enemy of my Enemy is my Friend Theory</em>. It is mine. Dibs.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP geek</div>
      <p>Yeah, because no one in human history ever thought of that before…</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · definitely not STEM</div>
      <p>Wait, you can test that with <em>data</em>? I thought that was just something villains say in movies.</p>
    </div>
  </div>

    <!-- Continue the rest of the dialog like this... -->

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>We can, provided the universe offers us three essential components:</p>
      <ol>
        <li>A large population of semi-cooperative agents.</li>
        <li>Public records of their conflicts.</li>
        <li>An alarming amount of free time.</li>
      </ol>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Good news, Sheldon. We have Reddit and your social life.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      Behind the joke, Leonard has just proposed a testable hypothesis:
      if two communities attack the same target, their future interactions
      might become friendlier. Next step: turn that into data.
    </p>
  </div>
</div>

# Scene 1 – Building the “social collider” (the data) {#dataset}

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – LATER.</strong> The whiteboard now shows a huge graph. Nodes,
    arrows, chaos, and a badly drawn Reddit logo.</p>
    <p>Our universe is a directed graph of subreddit-to-subreddit mentions. Each
    interaction becomes an edge with four key ingredients:</p>
    <ul>
      <li><strong>Source subreddit</strong> → where the post lives</li>
      <li><strong>Target subreddit</strong> → who is mentioned or linked</li>
      <li><strong>Timestamp</strong> → when the drama happened</li>
      <li><strong>Sentiment label</strong> → negative or non-negative</li>
    </ul>
  </div>
</div>

<!-- Whiteboard illustration -->
<figure class="scene-figure">
  <img
    src="{{ '/assets/img/whiteboard-graph.png' | relative_url }}"
    alt="Whiteboard showing a chaotic directed subreddit interaction graph"
    loading="lazy"
  >
</figure>


<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Here is our universe: each node is a subreddit, and each arrow is a post where one subreddit talks about another.</p>
    </div>
  </div>

</div>

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
  <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      To go beyond the raw link network, Raj introduces <strong>subreddit embeddings</strong>:
      each community becomes a point in a 300-dimensional space capturing audience &amp; topic similarity.
    </p>
  </div>

</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        Excellent. This embedding space is our <em>baseline geometry</em>:
        it tells us who was close <strong>before</strong> we introduce enemies  - 
        so we don’t confuse “same tribe” with “new alliance”.
      </p>
    </div>
  </div>
</div>

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>Leonard pulls up an interactive network map of the subreddit universe:</p>
    <ul>
      <li>nodes = subreddits</li>
      <li>red edges = mostly <strong>negative</strong> interactions</li>
      <li>blue edges = mostly <strong>non-negative</strong> interactions</li>
      <li>node size = total outgoing interactions</li>
    </ul>

    <p style="margin-top: 0.6rem;">
      The layout is a <strong>2D UMAP projection of subreddit embeddings</strong> (cosine):
      positions stay <strong>fixed across months</strong>, while <strong>color (net outgoing sentiment)</strong>
      and <strong>size (monthly activity)</strong> change over time.
    </p>
  </div>
</div>

<div class="viz-embed">
  <iframe
    src="{{ '/assets/interactive/sentiment_map.html' | relative_url }}"
    width="100%"
    height="900"
    style="border:0; border-radius: 14px;"
    loading="lazy"
  ></iframe>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So… most of the map is blue. Reddit is basically wholesome?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Most interactions are neutral-to-positive, but a smaller set of subreddits keeps showing up as sources of negativity — and they often         sit in the same embedding neighborhoods on the UMAP map.</p>
    </div>
  </div>
  
  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So it’s not “bad vibes everywhere”… it’s more concentrated in a few areas. But before you build theories — are we sure blue really             means friendly?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Hold that thought. If our labels are wrong, any “enemy-of-my-enemy” analysis becomes science fiction.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So first you’re doing… what, therapy for your dataset?</p>
    </div>
  </div>

</div>

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>The crew quickly bumps into the limits of their sentiment classifier:</p>
    <ol>
      <li>Accuracy hovers around <strong>0.8</strong>, trained on only 1,020 labelled posts.</li>
      <li>Neutral and positive are merged into one big “non-negative” bucket.</li>
      <li>Irony, inside jokes, and passive-aggressive shade are often mislabelled.</li>
    </ol>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Which means some of these cheerful blue arrows are actually red. They’re just… <em>undercover red</em>.</p>
    </div>
  </div>

</div>


# Scene 2 – Hidden hostilities: The Case of the Smiling Enemy {#triads}

<!-- ========================= -->
<!-- Chat 1 -->
<!-- ========================= -->
<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Let’s ignore text for now. Just look at interactions over time.
        For a pair of subreddits, we have a sequence of sentiments.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Right. Some pairs fight constantly. Others are mostly neutral.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>So what would look strange?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>A sudden mood swing?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        What if we measure how fast sentiment flips back?
        For each interaction, we look at the next one where
        the sentiment changes sign.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>That gives us a delay between the two.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>But “fast” depends on the pair, right?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        Exactly. Some pairs interact every hour, others once a month.
        But if we normalize, we can have a score that captures
        how abnormal the timing is.
      </p>
    </div>
  </div>

</div>
<!-- end Chat 1 -->


<!-- ========================= -->
<!-- Narrator 1 -->
<!-- ========================= -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>

    <p class="narrator-lead">
      Raj steps back and defines a simple timing score to catch suspicious sentiment flips.
    </p>

    <div class="narrator-grid">
      <div class="narrator-card">
        <div class="narrator-card-title">Reference pace (per pair)</div>
        <p class="narrator-card-text">
          Compute the <strong>median interval</strong> between consecutive interactions.
        </p>
      </div>

      <div class="narrator-card">
        <div class="narrator-card-title">Flip delay</div>
        <p class="narrator-card-text">
          For each flip, measure <strong>\(\Delta t\)</strong>: time until the next interaction with the opposite sentiment.
        </p>
      </div>
    </div>

    <div class="narrator-math">
      \[
        s_{\text{flip}}=\exp\!\left(-\frac{\Delta t}{\text{Median Interval}}\right)
      \]
    </div>

    <ul class="narrator-points">
      <li><strong>Fast reversal</strong> ⇒ \(\Delta t\) small ⇒ <strong>\(s_{\text{flip}}\approx 1\)</strong></li>
      <li><strong>Slow reversal</strong> ⇒ \(\Delta t\) large ⇒ <strong>\(s_{\text{flip}}\to 0\)</strong></li>
    </ul>

    <p class="narrator-footer">
      This makes the score comparable across pairs with very different activity rhythms.
    </p>
  </div>
</div>


<!-- ========================= -->
<!-- Figure (outside chat) -->
<!-- ========================= -->
<div class="narrator-figure narrator-figure--wide">
  <img
    src="{{ '/assets/img/flip_score.png' | relative_url }}"
    alt="Example of abnormal sentiment reversal over time"
  >
</div>


<!-- ========================= -->
<!-- Chat 2 -->
<!-- ========================= -->
<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Raj, you’re a genius! The histogram says it clearly.
        Most flips behave normally, but there’s a long tail.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        Right! We’ve got 22,261 flips sitting above 0.6.
        Which is roughly exp(−1/2).
        Those flips happen at least twice as fast
        as the median interaction interval.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So almost ten percent?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>8.7%, to be exact. That’s not random variation. That’s a real tail.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        Agreed. These are temporally abnormal events.
        Not necessarily wrong, but statistically suspicious.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Suspicious enough to investigate.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Exactly. Timing alone doesn’t prove mislabeling,
        but it gives us a strong prior.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>If a flip is both fast and semantically inconsistent, that’s a red flag.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        So now let’s bring the text back in and do a joint model.
        Temporal surprise plus linguistic evidence.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Ideally, we want a model that outputs the probability that a message is genuinely hostile based on its text.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>A logistic regression fits perfectly. It directly outputs a probability. In inputs we could choose a small set of strong LIWC and VADER features.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Yes, plus the cosine similarity between the source and target subreddit embeddings, to capture interaction context.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Okay, so the model gives us a probability, but how do we actually decide what gets flagged?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>If the probability is high enough, the message gets flagged right away. We could then use the flip score to handle cases where the probability is unclear.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>So the logic is: suspicious text + very high flip score equals a valid flag.</p>
      <p>Let me work on this tonight and I’ll come with a model tomorrow !</p>
    </div>
  </div>

</div>
<!-- end Chat 3 -->


<!-- ========================= -->
<!-- Narrator 2+3+4 (merged) -->
<!-- ========================= -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>

    <p>
      After a very long night of work  -  the kind fueled by cold coffee, overconfidence,
      and mild despair  -  Raj finally pins down a model that is simple but robust.
    </p>

    <p class="narrator-lead"><strong>Step 1  -  Selecting truly discriminative textual features</strong></p>
    <p>
      The goal is simple: keep only the textual signals that consistently distinguish
      hostile (−1) from non-hostile (+1) links, without overfitting.
    </p>
    <ul>
      <li>
        Each LIWC and VADER feature is evaluated independently using repeated out-of-fold AUC,
        after standardizing within each source subreddit to remove writing-style bias.
      </li>
      <li>
        Features are ranked by their median AUC across repeats, penalized if their rank is unstable
        or if their effect direction flips.
      </li>
      <li>
        Only features that score high on test AUC, remain stable across repetitions,
        generalize to later time periods, and are not redundant are kept.
      </li>
    </ul>

    <p class="narrator-lead"><strong>Step 2  -  A probabilistic hostility model</strong></p>
    <p>These selected features are fed into a logistic regression with L1 regularization.</p>

    <div class="narrator-grid">
      <div class="narrator-card">
        <div class="narrator-card-title">Inputs</div>
        <div class="narrator-card-text">
          <ul>
            <li>Selected LIWC features</li>
            <li>Selected VADER features</li>
            <li>Cosine similarity between source and target subreddit embeddings</li>
          </ul>
        </div>
      </div>

      <div class="narrator-card">
        <div class="narrator-card-title">Output</div>
        <p class="narrator-card-text"><code>p_true_hostile ∈ [0, 1]</code></p>
      </div>
    </div>

    <p>
      It answers the question: <em>Is this message hostile compared to the norm of this relationship?</em>
    </p>

    <ul>
      <li>L1 regularization enforces sparsity and prevents the model from relying on weak or redundant signals.</li>
      <li>Liblinear keeps the optimization stable with a small number of features.</li>
    </ul>

    <p class="narrator-lead"><strong>Step 3  -  Decision logic with temporal corroboration</strong></p>
    <p>The probability alone is not blindly trusted. Two explicit rules are applied.</p>

    <div class="narrator-grid">
      <div class="narrator-card">
        <div class="narrator-card-title">Certainty Rule</div>
        <p class="narrator-card-text">
          If <code>p_true_hostile ≥ 0.99</code>, the message is flagged immediately.
          At this level, the text is almost certainly toxic. No external evidence is needed.
        </p>
      </div>

      <div class="narrator-card">
        <div class="narrator-card-title">Corroboration Rule</div>
        <p class="narrator-card-text">
          If <code>p_true_hostile ≥ 0.85</code>, the model is already confident  -  but not absolute.
          In this case, we require temporal confirmation using <code>s_flip</code>.
          Only flips in the top 5% closest to 1 (fastest reversals relative to the pair’s normal rhythm) are accepted.
        </p>
      </div>
    </div>

    <div class="narrator-math">
      \[
        \text{Flag} =
        \begin{cases}
          1 & \text{if } p_{\text{true\_hostile}} \ge 0.99 \\
          1 & \text{if } p_{\text{true\_hostile}} \ge 0.85 \ \text{and } s_{\text{flip}} \ge q_{0.95}(s_{\text{flip}}) \\
          0 & \text{otherwise}
        \end{cases}
      \]
    </div>

  </div>
</div>


<!-- ========================= -->
<!-- Chat 4 (Morning results) -->
<!-- ========================= -->
<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Good morning. I bring results, statistics… and the comforting news that my laptop survived the night. Barely.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>That’s already a win.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>First, feature selection. Out of all LIWC and VADER signals, only five consistently matter: <code>LIWC_Negemo</code>, <code>LIWC_Anger</code>, <code>LIWC_Affect</code>, <code>VADER_neg</code>, <code>VADER_compound</code>.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Okay, first - please admire this graph. Each feature on its own already separates friendly from hostile interactions.</p>
    </div>
  </div>

</div>
<!-- end Chat 4 -->


<!-- ========================= -->
<!-- Plot 1 (outside chat) -->
<!-- ========================= -->
<div class="viz-embed">
  <iframe
    src="{{ '/assets/interactive/friends_vs_explicit.html' | relative_url }}"
    width="100%"
    height="480"
    style="border:0; border-radius: 14px;"
    loading="lazy"
  ></iframe>
</div>


<!-- ========================= -->
<!-- Chat 5 -->
<!-- ========================= -->
<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        Now, the model results.
        Using those features, plus subreddit embedding similarity - and ignoring pairs with fewer than five interactions - the model flags <strong>12,079</strong> additional links.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Twelve thousand?! That’s… a lot.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Context, Penny. There are <strong>858,488</strong> interactions total.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Still, those hidden cases add nearly 15% on top of the visible hostility.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Thank you, Sheldon.</p>
      <p>
        After relabeling, hidden hostility makes up <strong>12.8%</strong> of all hostile interactions.
        And the best part? The hidden hostility boxplots of linguistic features almost perfectly overlap with the explicit hostile ones.
      </p>
    </div>
  </div>

</div>
<!-- end Chat 5 -->


<!-- ========================= -->
<!-- Plot 2 (outside chat) -->
<!-- ========================= -->
<div class="viz-embed">
  <iframe
    src="{{ '/assets/interactive/friends_vs_explicit_vs_hidden.html' | relative_url }}"
    width="100%"
    height="480"
    style="border:0; border-radius: 14px;"
    loading="lazy"
  ></iframe>
</div>


<!-- ========================= -->
<!-- Chat 6 (your added dialogue) -->
<!-- ========================= -->
<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So if we’d missed that…</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Our entire analysis would’ve been quietly wrong.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Before we move on, there’s one last check we could do.</p>
      <p>We haven’t used mobilization labels anywhere.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>For what exactly?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>To see if everything we’ve built makes sense together.</p>
      <p>
        We can look at interactions that happen during mobilization and show very fast sentiment flips.
        Behaviorally suspicious moments, even without reading the text.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Correct. Not proof of hostility, but clear contextual tension.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Then we ask a simple question:</p>
      <p>
        Is <code>p_true_hostile</code> higher in those situations than in normal positive interactions?
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Actually… I already ran that test.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>And?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Good news. Very good news.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Define “good” quantitatively.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Mann–Whitney test.</p>
      <p>p-value: <code>2.38083e-04</code>.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        So <code>p_true_hostile</code> is higher exactly where mobilization and fast flips indicate tension.
      </p>
      <p>Which means what we’ve built holds together.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Beautiful. Nice work, guys.</p>
      <p>So now we can finally move on.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Yeah. Now it gets fun.</p>
      <p>
        We can actually test whether the <em>enemy of my enemy is my friend</em> holds… or completely fails.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        At last. We are entering the core theoretical question.
        But before that, it might still be worth looking at how the flagged hidden hostilities are distributed across communities.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>That sounds complicated.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Not really. And it’s actually very satisfying to visualize.</p>
      <p>Because - obviously - I already made the plot.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Of course you did.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Okay… now that I want to see.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>On the left, you see the most aggressive subreddits.</p>
      <p>
        When you click on one aggressor, the top-right panel shows its explicit hostile targets,
        and the bottom-right shows its top implicitly hostile targets.
      </p>
    </div>
  </div>

</div>
<!-- end Chat 6 -->

<!-- ========================= -->
<!-- Plot 3 (outside chat) -->
<!-- ========================= -->
<div class="viz-embed">
  <iframe
    src="{{ '/assets/interactive/comprehensive_target_analysis.html' | relative_url }}"
    width="100%"
    height="800"
    style="border:0; border-radius: 14px;"
    loading="lazy"
  ></iframe>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        At last. We are entering the core theoretical question.
        But before that, it might still be worth looking at how the flagged hidden hostilities are distributed across communities.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>That sounds complicated.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Not really. And it’s actually very satisfying to visualize.</p>
      <p>Because — obviously — I already made the plot.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Of course you did.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Okay… now that I want to see.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        Same embedding layout as before — so positions are comparable across months.
        Red nodes are subreddits that emitted at least one hidden-hostility link during that month.
      </p>
      <p>
        The larger the node, the more hidden hostility it emitted.
        Grey nodes are still active in the network — just not flagged as emitters.
      </p>
    </div>
  </div>

</div>
<!-- end chat -->

<!-- ========================= -->
<!-- Hidden Hostility Emitters Map -->
<!-- ========================= -->
<div class="viz-embed">
  <iframe
    src="{{ '/assets/interactive/hidden_hostility_emitters_map.html' | relative_url }}"
    width="100%"
    height="800"
    style="border:0; border-radius: 14px;"
    loading="lazy"
  ></iframe>
</div>


<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      The room goes quiet for a second - partly because the visualization is genuinely cool,
      and partly because it makes one thing unavoidable:
      Reddit isn’t short on enemies.
      The only question left is whether sharing one actually changes what happens next.
    </p>
  </div>
</div>

# Scene 3 – The Experiment: Testing The Enemy of my Enemy is my Friend Theory {#results}

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      <strong>INT. APARTMENT 4A – NIGHT.</strong> Leonard’s whiteboard is full of arrows between subreddits and one
      giant question:
      <em>“Does sharing an enemy lead to subsequent friendship?”</em>
    </p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Okay-real question. If two subreddits attack the same target… do they later become friends?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>A classic proverb. But now we test it as a causal claim, not a vibe.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Meaning we need: time, interactions, and a clean definition of “enemy” and “friend”.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So… we’re turning drama into math. Great.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      To test the proverb, the team builds a full pipeline: define relationships, define co-attacks,
      measure friendship after conflict, then test causality with matching and sensitivity analysis.
    </p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Okay, for this part, we first organize everything in time.<br>
      We use months as our time unit.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Why months? Why not weeks?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Because we need consistency.<br>
      So we create a clean month format and a month index from 1 to 41 since our dataset spans 41 months of Reddit activity.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>That way, later we can define “before” and “after” a conflict,<br>
      and make sure two attacks happened in the same time bin.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p class="narrator-lead"><strong>Part 1  -  Monthly summaries (setup)</strong></p>
    <p>
      Before anyone can talk about “co-attacks” or “friendship after conflict,” the team needs a timeline
      that’s clean enough to measure cause and effect. So they compress Reddit into 41 monthly snapshots.
    </p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Next, we build two monthly summary tables.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>First: <code>pair_month</code>. For every (SOURCE → TARGET) in a month,<br>
      we count positive links and negative links.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Second: <code>sub_month</code>. For each SOURCE subreddit in a month,<br>
      we summarize its outgoing activity and negativity.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So one table is “pair behavior”, and one is “subreddit behavior”.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Exactly. Later these are used for co-attacks and confounders.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Let’s visualize the fraction of subreddits that get attacked by at least 2 distinct attackers in every month.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>And if that fraction is consistently big?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Then the data we have involves shared antagonism, and it is suitable for your study.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      This is their first reality check: before we even talk about “friendship,” we verify that co-attacking the same target happens often enough to study.
      After spending some time reorganizing the data, they draw Plot A:
    </p>
  </div>
</div>

<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/pct_multi_attacked_target_subreddits.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>We see indeed that every month, about 35% of the targeted subreddits are attacked by at least 2 distinct attackers.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Shared antagonism isn’t rare noise.<br>
      It seems to be a structural pattern on Reddit.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – NIGHT.</strong></p>
    <p>Their discussion is briefly derailed by their regularly scheduled Chinese dinner-an interruption as predictable as it is unavoidable - after which they regroup, recalibrate, and resume the work.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Now, to study our problematic — <em>“Is the enemy of my enemy my friend?”</em> —
        we first need to know who’s enemies with whom… and who’s friends with whom.
        So let’s zoom in on the <strong>monthly interaction dynamics</strong> between any pair of subreddits.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        For each month, we compute the total interaction count between each pair (A,B),
        equal to the number of links sent by A to B, and from B to A.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Let’s also define a Sentiment Balance between A and B based on their monthly interactions:</p>
      <div class="chat-math">
        \[
        \text{SentimentBalance}_{A,B}
        =
        \frac{\text{PosLinks}_{A,B}-\text{NegLinks}_{A,B}}
             {\text{PosLinks}_{A,B}+\text{NegLinks}_{A,B}}
        =
        \frac{\text{sum}_{A,B}}{\text{count}_{A,B}}
        \]
      </div>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Great idea, that way we can have an idea about their sentiment status by weighting in both their positive and negative interactions.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        Exactly! This ratio is −1 if all interactions between A and B are negative during that month,
        +1 if all interactions are positive.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>But what if they only interact once? That seems unreliable.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        I’m afraid Penny is right, we need to weight this ratio by the volume of the pair’s interactions.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Okay, let’s define a friendship score:</p>
      <div class="chat-math">
        \[
        \text{FriendshipScore}_{A,B}
        =
        \text{SentimentBalance}_{A,B}\cdot
        \log\!\bigl(1+\text{count}_{A,B}\bigr)
        \]
      </div>
      <p>Now frequent interactions carry more weight.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>We can now use these friendship scores to classify the monthly relationship status of each pair of subreddits: friends, neutral, or enemies.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Let’s run K-means on friendship scores with 3 clusters, each corresponding to one of the statuses.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Now we can define the thresholds on friendship scores for ennemy or friendship categorization as the midpoints between cluster centers.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>They run K-means successfully, identifiying the ennemy and friendship thresholds. The plot them on top of the friendship scores distribution:</p>
  </div>
</div>

<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/friendship_score_distribution.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>


<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So based on where the friendship score falls relative to these thresholds we identify the relationship status between the pair?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Exactly, if the score is lower than the ennemy threshold, then the subreddits are ennemies, if its greater than the friendship threshold, then they are friends, and if its in between, they’re neutral.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Great, now we need to identify for each target subreddit, which are its common attackers.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>We can’t.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Why so? We can look at the negative interactions…</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>It’s my bed time</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – The Next Morning</strong></p>
    <p>The team now aims at identifying all subreddits that actually co-attack a same target.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So I was thinking about our goal, and we’re not just interested in studying the pairs of subreddits who attacked a same target.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>I don’t get where you’re headed.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        See Penny it’s simple, we want to study whether the enemy of my enemy is my friend. Now imagine two subreddits, A and B, that both attacked the same target subreddit C, but two years apart. If A and B later become friends, counting this as evidence would be misleading. Because their attacks happened so far apart in time, they likely didn’t even realize they had a common enemy. So if they do become friends later on, it’s very unlikely that this happened because of their attacks on C.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>exactly, so we are interested in pairs that satisfy 2 conditions:</p>
      <ul>
        <li>they need to have co-attacked a same target, meaning they should have both attacked C in any same month.</li>
        <li>They need to be considered both ennemies with C during that co-attack month.</li>
      </ul>
      <p>
        Let’s call all pairs satisfying these 2 conditions ‘strong co-attackers of C’.
        These pairs are the ones whose relationship evolution we should be analyzing to have the answer to our problematic.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        Let’s first identify for each target C, the pairs of co-attackers satisfying of above conditions.
        We can then record the start month of their common conflict with C as the first month they co-attacked C while being ennemies with C,
        and the end month of their common conflict as the last month satisfying both conditions.
        We can also calculate their ‘conflict duration’ as the time between the end and start of the common conflict.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        And while we’re at it we can for each such pair (A,B) study the evolution of their friendship status,
        and record the first month where A and B became friends.
      </p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      They manage to save the conflict start, end, as well as the friendship start month for all strong co-attackers of a same target C.
      They even visualize a sample of them:
    </p>
  </div>
</div>

<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/timelines_basic.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>


<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>
        So in this timeplot, for each strong co-attackers of a common target C,
        the red dot represents their conflict (or strong co-attack) start,
        and the green dot represents their friendship start?
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Exactly!</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Hey look, some pairs become friends 2 years after their strong co-attack event.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        Interesting observation Raj! Indeed, for our analysis of ‘is the ennemy of my ennemy my friend?’
        we should study only pairs which show signs of friendship close to their strong co-attack duration.
        Otherwise, if A and B strongly co-attacked C and became friends 3 years later,
        then this positive friendship indication would bias our results since this subsequent friendship is very likely not caused by their strong co-attack event.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        I agree. Therefore for every strong co-attacker pair, if we want to assess whether their common conflict was followed by a subsequent friendship,
        I propose we only consider the interval [conflict start, conflict end +1 month].
        If they became friends after that interval, then the chance that this friendship was due to their strong co-attack is reduced.
        However, if we observe a friendship start inside that interval, then this is a positive indication that their co-attack might have played a role in this friendship.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Why do you give a margin of 1 month?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>To account for the effect that a possible subsequent friendship could arise shortly starting the last month of conflict.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>

    <p>
      <strong>INT. APARTMENT 4A – NEXT DAY.</strong>
      The team finally switches from “pattern-spotting” to something far more dangerous:
      <strong>causality</strong>. Step one is defining what counts as the “treatment,”
      what counts as a “control,” and what outcome they’ll measure.
    </p>

    <p class="narrator-lead"><strong>Treated pairs (A, B)</strong></p>
    <ul>
      <li>They <strong>ever</strong> strongly co-attacked some common target <strong>C</strong>.</li>
      <li>Their <strong>event time</strong> is the month of their <strong>first strong co-attack</strong> — the earliest potentially causal signal.</li>
      <li>They were <strong>not friends before</strong> that event time.</li>
      <li>
        Their <strong>conflict period</strong> is
        <span class="math-inline">\([\text{conflict\_start},\; \text{conflict\_end} + 1]\)</span>,
        which captures months where coordinated hostility is active (or immediately consequential).
      </li>
      <li>
        Friendship formation is evaluated <strong>only inside this window</strong>,
        since friendships far outside it are unlikely to be caused by the co-attack.
      </li>
    </ul>

    <p class="narrator-lead"><strong>Control pairs (A, B)</strong></p>
    <p>
      Control pairs are pairs that <strong>never co-attacked</strong> any common target at any intensity
      (neither weak nor strong) during the entire observation period.
    </p>
    <p>
      To make them comparable, each control pair receives a <strong>pseudo event</strong>:
      a pseudo conflict start is sampled from the treated distribution of strong co-attack start times,
      and a pseudo conflict duration is sampled from the treated conflict-duration distribution.
      The pseudo conflict end is then set to:
      <span class="math-inline">\(\text{pseudo_end}=\text{pseudo_start}+\text{duration}\)</span>.
      Controls are also required to have <strong>no friendship links before</strong> their pseudo event.
    </p>

    <p class="narrator-lead"><strong>Outcome (Y)</strong></p>
    <p>
      Finally, every pair gets a binary outcome:
      <strong>Y = 1</strong> if a strict friendship starts within the conflict period,
      and <strong>Y = 0</strong> otherwise.
    </p>
  </div>
</div>

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>

    <p>
      Penny couldn’t stop thinking about lunch. That day, they were supposed to order pizzas.
      Penny took all the team’s topping preferences, called the Cheasecake Factory for delivery,
      and messed up everyone’s order. They still ate, very quickly, and resumed the work as soon as possible.
      They now want to identify confounders.
      Sheldon draws a Directed Acyclic Diagram (DAG), highlighting the possible confounders and their relationship with the treatment and the outcome:
    </p>

  </div>
</div>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/dag_confounders.png' | relative_url }}"
       alt="DAG showing confounders (similarity, activity, aggressiveness, prior hostility) affecting both treatment (co-attack) and outcome (friendship).">
  <figcaption>
    DAG: Why we must control for confounders before estimating the causal effect of co-attacking on friendship.
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Gentlemen, I require your attention as I justify my confounders considerations.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        <strong>Similarity → CoAttack.</strong>
        Subreddits with similar topics or ideologies are more likely to target the same communities,
        which increases the probability of co-attacks.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        <strong>Aggressiveness → CoAttack.</strong>
        More aggressive subreddits are intrinsically more likely to engage in hostile interactions,
        including coordinated attacks on shared targets.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        <strong>Activity → CoAttack.</strong>
        Highly active subreddits generate more links overall, so they are mechanically more likely
        to appear in co-attack events.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        <strong>Similarity → Friendship.</strong>
        Similar subreddits are more likely to exchange positive links even without any shared conflict,
        simply because they overlap in interests and users.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        <strong>Aggressiveness → Friendship.</strong>
        Highly aggressive communities are less likely to form stable positive ties,
        regardless of whether they co-attack someone.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        <strong>Activity → Friendship.</strong>
        More active subreddits have more chances to form positive interactions,
        simply because they interact more in general.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        <strong>Hostility → Friendship.</strong>
        Prior hostility between two subreddits reduces the likelihood that they will later become friends.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Now, for how we compute them - pay attention, this is where people start making mistakes.</p>
    </div>
  </div>

  
</div> <!-- end .chat-thread -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>

    <p class="narrator-lead">
      Before matching, the team needs concrete <strong>confounders</strong> — numbers that describe each pair
      <em>before</em> the conflict starts.
      So they compute four ingredients for every pair \((A,B)\).
    </p>

    <div class="narrator-grid">
      <div class="narrator-card">
        <div class="narrator-card-title">Activity</div>
        <p class="narrator-card-text">
          The <strong>activity</strong> of a subreddit \(X\) is its total outgoing links summed across all months
          <strong>before the conflict start</strong>.
        </p>
      </div>

      <div class="narrator-card">
        <div class="narrator-card-title">Aggressiveness</div>
        <p class="narrator-card-text">
          The <strong>aggressiveness</strong> of a subreddit \(X\) is the fraction of its outgoing links that are negative
          over all months \(m\) before conflict start:
        </p>
        <div class="narrator-math">
          \[
            \text{aggr}(X) = \frac{\sum_m \text{out_neg}(X,m)}{\text{total_out}(X)}
          \]
        </div>
      </div>

      <div class="narrator-card">
        <div class="narrator-card-title">Topical similarity</div>
        <p class="narrator-card-text">
          <strong>Topical similarity</strong> between \(A\) and \(B\) is computed from their embeddings \(e_A\) and \(e_B\):
        </p>
        <div class="narrator-math">
          \[
            \text{similarity}(A,B) = \cos(e_A, e_B)
          \]
        </div>
      </div>

      <div class="narrator-card">
        <div class="narrator-card-title">Pre-conflict hostility</div>
        <p class="narrator-card-text">
          <strong>Pre-conflict hostility</strong> is the number of negative links exchanged between \(A\) and \(B\)
          <em>before the event time</em>.
        </p>
      </div>
    </div>

  </div>
</div>

<!-- ========================= -->
<!-- Scene: Propensity scores -->
<!-- ========================= -->

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>So now we have treated + control pairs with the same structure, an outcome, and confounders.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Now we need a fair comparison. So we estimate propensity scores:</p>
      <p><em>“How likely is a pair (A,B) to be treated, based only on pre-conflict confounders?”</em></p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>What do we feed into that model?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>We merge treated and control pairs, and keep only the confounders: activity, aggressiveness, similarity, hostility_pre.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Before modeling, we standardize each confounder (mean 0, std 1). This prevents one variable from dominating just because it has bigger numbers.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- ========================= -->
<!-- Narrator transition -->
<!-- ========================= -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      After computing a propensity score for every pair, they first run a logistic regression to estimate propensity scores
      and inspect the fitted coefficients—just to see which pre-conflict traits are associated with becoming “treated.”
    </p>
    <p>
      In the regression:
      <strong>aggressiveness</strong> and <strong>activity</strong> have <strong>positive coefficients</strong>
      (higher values make co-attacking more likely),
      while <strong>hostility_pre</strong> and <strong>similarity</strong> have <strong>negative coefficients</strong>
      (higher values make co-attacking less likely).
      The <strong>magnitude</strong> of each coefficient reflects the strength of its association with treatment assignment.
    </p>
    <p>
      Crucially, these coefficients describe how treatment is assigned in the data—they are <strong>not causal effects</strong>.
      Their job is to confirm that confounding exists and to motivate why we need <strong>propensity-score matching</strong>.
      Only then do they plot the ROC curve as a quick check of how well the confounders separate treated from control before matching.
    </p>
  </div>
</div>


<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – NIGHT.</strong><br>
    Raj puts up a curvy line. Penny stares like it’s a bad rollercoaster design.</p>
  </div>
</div>

<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/roc_propensity.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>


<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Why is this line trying to escape the graph?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        It’s the ROC curve. It checks if our propensity model can separate
        treated pairs (co-attacking) from control pairs using the confounders.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Think of it like a bouncer: we give each pair a “treated-likelihood score”
        (propensity score), and the ROC curve shows how good the bouncer is at deciding.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>If the bouncer is guessing randomly, AUC (Area Under the Curve) = 0.5, like a coin flip.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Our AUC is 0.820.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So… good bouncer?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Pretty good. It means if we randomly pick one treated and one control pair,
        there’s about an 82% chance the treated pair gets the higher score.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>And that’s the point: treatment isn’t random. It’s linked to pre-conflict traits.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        So we need propensity-score matching to compare “look-alikes”
        and avoid confusing baseline differences with treatment effects.
      </p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>Penny nods like she totally knew what AUC meant all along.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>AUC 0.820. Our model has brain cells. Can we leave now?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Not yet. AUC being high means treated and control are different BEFORE matching.
        So we need to check overlap and matchability.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>In short: ROC says “they differ.” Now we ask: “can we still find look-alikes?”</p>
    </div>
  </div>
</div> <!-- end .chat-thread -->

<!-- (show 5 plots) -->

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/pscore_density_before_matching.png' | relative_url }}"
       alt="Propensity score density: treated vs control (before matching).">
  <figcaption>Propensity Score Distributions — Treated vs Control (Before Matching)</figcaption>
</figure>


<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        Now the key diagnostic: propensity score distributions.
        They’re different… but they overlap.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        That overlap is common support. It means for most treated pairs,
        there exists a comparable control with a similar propensity score.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        No overlap would mean: “matching impossible.”
        But we have overlap - so we can match reliably.
      </p>
    </div>
  </div>

</div> <!-- end .chat-thread -->
<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – LATER.</strong></p>
    <p>They match treated pairs to similar controls by propensity score.</p>
  </div>
</div>


<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        We do 1:1 nearest-neighbor matching: for each treated pair,
        pick the closest control by propensity score.
      </p>
    </div>
  </div>

  <!-- (show plot) -->
<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/match_distance.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>


  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        This distance histogram shows |pscore_T − pscore_C|.
        Most distances are near zero → good-quality matches.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So we found look-alikes… not random roommates. Nice.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show 5 plots same as before but after matching) -->
<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – NIGHT.</strong><br>
    After the matching chaos, the team does the one check that matters:
    Did treated and control finally become comparable?</p>
  </div>
</div>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/pscore_density_after_matching.png' | relative_url }}"
       alt="Propensity score density: treated vs control (after matching).">
  <figcaption>
    Propensity Score Distributions — Treated vs Control (After Matching)
  </figcaption>
</figure>


<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      We look at the propensity score density AFTER matching.
      If matching worked, the treated and control curves should overlap strongly - 
      because we deliberately paired each treated unit with a control unit that had a similar probability of treatment.
    </p>
  </div>
</div>

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      And that’s exactly what we see here:
      the two distributions now sit on top of each other much more closely than before.
    </p>
  </div>
</div>

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – RESULTS SLIDE.</strong><br>
    Matching is done. Now they finally compare outcomes.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>We define the outcome the same way for both groups.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        Y = 1 if a NEW strict friendship starts inside<br>
        [conflict_start, conflict_end + 1 month].<br>
        Otherwise Y = 0.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So… Y is just “friends in time: yes or no.”</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->
<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/treatment_outcome_matrix.html' | relative_url }}"
    width="80%"
    height="400"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        The heatmap shows the raw counts of Y=0 and Y=1 for treated vs control after matching, but as percentages (friendship rates).
         The percentage of control pairs that became friends soon after their common conflict is 1.8%, while that for treated pairs Is 0.6%. Therefore, we have an initial idea that control pairs more frequently tend to become friends after a strong co-attack.
      </p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Now we summarize that difference with ATT: Average Treatment Effect on the Treated.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>In normal words?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>
        ATT is the average (Y_treated − Y_control) across matched pairs.
        Since Y is 0/1, it’s a difference in friendship probability, in percentage points.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>We have 84,409 matched pairs, and ATT is −1.13 percentage points.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So strong co-attackers are about 1.13 points LESS likely to become strict friends than similar controls.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – FINAL CALC.</strong></p>
    <p>Now they compute ATT: average (Y<sub>T</sub> − Y<sub>C</sub>) across matched pairs.</p>
  </div>
</div>

<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/bootstrap_att.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>


<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>But how sure are we about that number?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Excellent Penny! You know you surprise me for a non-STEM! To answer your concerns, we need to perform bootstrap.That’s what the bootstrap plot shows: we resample matched pairs many times to see how ATT varies.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>On the histogram:<br>
      • dashed vertical line = ATT = 0 (null boundary)<br>
      • solid line = observed ATT<br>
      • shaded region = 95% CI</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Results: SE ≈ 0.05 pp, 95% CI = [−1.23, −1.03] pp, and the one-sided p-value for “ATT &gt; 0” is ≈ 1.0.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>So overall, the data does not support “enemy of my enemy is my friend.” If anything, co-attacking is associated with a small but consistent decrease in friendship formation under our strict definitions.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – NIGHT.</strong></p>
    <p>The team has already done the “serious” causal work: matching treated and control pairs.<br>
    Now they face the uncomfortable question…</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Okay… we matched everything. Are we done?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Only if you believe we measured every confounder.<br>
      But we didn’t. So we ask: what if there’s hidden bias?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Like subreddit culture, moderation style, or informal alliances that aren’t in our data.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Exactly. That’s why we run a Rosenbaum sensitivity analysis on the matched pairs.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>Raj opens the matched dataset: each <code>matched_pair_id</code> contains one treated pair, one control pair,<br>
    and <code>Y = 1</code> if strict friendship appears in the (pseudo-)conflict window.</p>
  </div>
</div>
<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – CLOSE ON WHITEBOARD.</strong></p>
    <p>Sheldon draws a simple scorecard.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>For each matched pair, we compute:<br>
      D<sub>i</sub> = Y<sub>i</sub><sup>(T)</sup> − Y<sub>i</sub><sup>(C)</sup>.<br>
      So D<sub>i</sub> is:<br>
      +1 if treated “wins,”<br>
      −1 if control “wins,”<br>
      0 if it’s a tie.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So we only care about pairs where they don’t tie?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Right. Non-tied pairs tell us which side is more likely to show friendship.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->
<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – RESULTS SLIDE.</strong></p>
    <p>The numbers load. Penny leans in. Leonard stops breathing.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Okay… how many non-tied pairs do we have?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>n = 1,977 non-tied pairs.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>And the wins?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Treated wins N<sub>+</sub> = 527.<br>
      Control wins N<sub>−</sub> = 1,450.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Wait… controls win almost three times as often?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So the direction is… reversed.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Exactly. The average difference is:<br>
      tau_hat ≈ −0.47 across non-tied pairs.<br>
      Negative means treated co-attacking pairs are LESS likely to form strict friendship than matched controls.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->
<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – WHITEBOARD VIEW.</strong></p>
    <p>Sheldon circles the phrase: “treated &gt; control”.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Now we run a sign test with a one-sided alternative:<br>
      “treated pairs are MORE likely to become friends than controls.”</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>And the p-value?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Baseline p-value at Γ = 1 is p0 = 1.0.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Because the data goes the opposite way - controls win more often - so there’s zero evidence for “treated &gt; control.”</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – NIGHT.</strong></p>
    <p>They still do the Rosenbaum part… but now the meaning changes.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Rosenbaum’s Γ is how much an unobserved factor could tilt the odds of treatment within each matched pair.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Γ = 1 means no hidden bias.<br>
      Γ &gt; 1 means someone could be up to Γ times more likely to be treated due to an unobserved factor.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So we crank up Γ and see if the result holds?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Usually, yes - when you’re trying to defend a positive effect.<br>
      But here… we already don’t have a positive effect.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – ON THE TABLE.</strong></p> 
    <p>Raj scrolls down the Γ grid.</p>
  </div>
</div>

<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/sensitivity_curve.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>


  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>For Γ = 1.0 up to Γ = 6.0, the worst-case p-value stays:<br>
      p_upper(Γ) = 1.0.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So the sensitivity “threshold” is Γ* ≈ 1.0…</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>…but not because the result is fragile.<br>
      It’s because the one-sided test in the direction “treated &gt; control” is already completely non-significant at Γ = 1.</p>
    </div>
  </div>
</div> <!-- end .chat-thread -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – ON THE PLOT.</strong>/</p>
    <p>An orange line sits stubbornly at the top.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So the curve is just… stuck at 1?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Yes. It’s telling us:<br>
      even with no hidden bias, there’s no evidence that co-attacking increases strict friendship.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>And since the observed direction favors controls, increasing Γ doesn’t “flip” it into a positive treated effect.<br>
      Hidden bias that favors treatment can’t rescue a claim that treatment helps.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – NIGHT.</strong><br>
      The team reached a pretty awkward conclusion:
      co-attacking didn’t create friendship  -  it slightly reduced it.
    </p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Great. My childhood wisdom… ruined by statistics.</p>
    </div>
  </div>

</div>

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      But then Raj brings up a scary thought: what if some comments that were labeled “positive”
      were actually <em>implicitly hostile</em>?
    </p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>What if some posts look polite… but are secretly negative?</p>
      <p>Like “Wow, amazing idea 😐” energy.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Hidden hostility. Mislabeling.</p>
      <p>Exactly the kind of thing that can flip causal results.</p>
    </div>
  </div>

</div>

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – LATER.</strong><br>
      They take the original dataset (<code>df_monthly</code>) and relabel posts flagged as “implicit negatives”
      from +1 to −1. Same structure, new labels.
    </p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So we rebuild the monthly dataset with these corrected negatives.</p>
      <p>We call it <code>df_monthly_hidden</code>.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So it’s the same world… but with the “fake nice” comments exposed.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Exactly. And now we rerun the entire causal pipeline:</p>
      <p>propensity scores, matching, outcome Y, ATT, bootstrap, sensitivity - <br>
         everything. But starting from <code>df_monthly_hidden</code>.
      </p>
    </div>
  </div>

</div>


<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – RESULTS SLIDE.</strong><br>
      Raj shows the bootstrap histogram. Everyone leans in.
    </p>
  </div>
</div>

<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/bootstrap_att_hd.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>


<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        With <code>df_monthly_hidden</code>, ATT is <strong>+0.17 percentage points</strong>.
        The distribution is tightly centered there,
        with a bootstrap SD of about <strong>0.03</strong>,
        and a 95% CI of <strong>[0.12, 0.23] pp</strong>  -  fully ABOVE zero.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So… it’s actually positive now?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Yes. Statistically strong evidence too  -  the bootstrap p-value is basically zero.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>
        Meaning: once we account for potential hidden hostility,
        co-attacking is associated with a small but real increase in friendship formation.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>The proverb just got its redemption arc.</p>
    </div>
  </div>
    <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Premature celebration. We have not asked the most important question: does it survive hidden bias?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>That’s why we run Rosenbaum sensitivity analysis again.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- ========================= -->
<!-- Sensitivity figure -->
<!-- ========================= -->
<div class="viz-embed" style="max-width: 2000px; margin: 0 auto;">
  <iframe
    src="{{ '/assets/interactive/sensitivity_curve_hd.html' | relative_url }}"
    width="80%"
    height="500"
    style="border:0; border-radius:14px;"
    loading="lazy"
  ></iframe>
</div>


<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Here’s the result: once we allow even a small amount of hidden bias, the worst-case p-value jumps to 1.0 and stays there.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Meaning… it collapses?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Yes. The effect is not robust. It disappears as soon as Γ goes slightly above 1 - around Γ &gt; 1.2.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So even though bootstrap says “small positive effect,” sensitivity says “a tiny unobserved factor could explain it away.”</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So it’s like… the effect exists only in a perfect world.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Exactly. Bootstrap answers: “Is the estimate stable in our sample?” Sensitivity answers: “Could hidden confounding overturn it?”</p>
      <p>And here, the answer is: yes, very easily.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->


# Finale – The Enemy of my Enemy is my Friend Theory, evaluated {#conclusion}


  <div class="narrator-block">
    <div class="narrator-avatar">
      <img src="{{ '/assets/img/narrator.png' | relative_url }}"
           alt="Reddit-style narrator avatar">
    </div>
    <div class="narrator-body">
      <div class="narrator-label">Narrator · Data Redditor</div>
      <p><strong>INT. APARTMENT 4A – LATE EVENING.</strong></p>
      <p>The room is quiet now. The analysis is finished. What remains is the conclusion.</p>
    </div>
  </div>

  <!-- ========================= -->
  <!-- STRICT DEFINITIONS -->
  <!-- ========================= -->
  <div class="narrator-block narrator-block--clean">
    <div class="narrator-avatar">
      <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Narrator avatar">
    </div>
    <div class="narrator-body">
      <div class="narrator-label">Narrator · Data Redditor</div>
      <p class="narrator-lead"><strong>STRICT DEFINITIONS — MAIN CONCLUSION</strong></p>
    </div>
  </div>

  <div class="chat-thread">

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>Under the strict definitions we used for conflict and friendship, the conclusion is straightforward.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-leonard">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">LEONARD · NETWORK NERD</div>
        <p>
          Our matched comparisons do <strong>not</strong> support the hypothesis that strongly co-attacking
          a common enemy increases the likelihood of forming a friendship.
        </p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-penny">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
        <p>So, on average, attacking the same target doesn’t bring subreddits closer together.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-raj">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">RAJ · NLP GEEK</div>
        <p>In fact, friendship outcomes show up more often among control pairs than among treated pairs.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>Which is why the estimated effect is <strong>negative</strong> rather than positive.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-leonard">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">LEONARD · NETWORK NERD</div>
        <p>
          Even after controlling for observed confounders, co-attacking is associated with a small but statistically robust
          <strong>decrease</strong> in the probability of forming a friendship.
        </p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-penny">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
        <p>So the data really doesn’t back up “the enemy of my enemy is my friend.”</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>Not under these definitions, no.</p>
      </div>
    </div>

  </div><!-- end .chat-thread -->

  <!-- ========================= -->
  <!-- ROBUSTNESS -->
  <!-- ========================= -->
  <div class="narrator-block narrator-block--clean">
    <div class="narrator-avatar">
      <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Narrator avatar">
    </div>
    <div class="narrator-body">
      <div class="narrator-label">Narrator · Data Redditor</div>
      <p class="narrator-lead"><strong>ROBUSTNESS OF THE NEGATIVE CONCLUSION</strong></p>
    </div>
  </div>

  <div class="chat-thread">

    <div class="chat-msg chat-msg-left chat-raj">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">RAJ · NLP GEEK</div>
        <p>And this isn’t a fragile result.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-leonard">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">LEONARD · NETWORK NERD</div>
        <p>The sensitivity analysis shows there is <strong>no robust positive causal effect</strong> to defend.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>
          Even in the best-case scenario—no unobserved confounding—we still cannot claim that shared hostility
          causally promotes subsequent friendship.
        </p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-penny">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
        <p>So even when everything is stacked in favor of the proverb… it still doesn’t win.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>Correct.</p>
      </div>
    </div>

  </div><!-- end .chat-thread -->

  <!-- ========================= -->
  <!-- IMPLICIT NEGATIVES -->
  <!-- ========================= -->
  <div class="narrator-block">
    <div class="narrator-avatar">
      <img src="{{ '/assets/img/narrator.png' | relative_url }}"
           alt="Reddit-style narrator avatar">
    </div>
    <div class="narrator-body">
      <div class="narrator-label">Narrator · Data Redditor</div>
      <p>
        Then the definition of “negative” changes. And suddenly, the proverb has room to breathe.
      </p>
    </div>
  </div>

  <div class="chat-thread">

    <div class="chat-msg chat-msg-left chat-raj">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">RAJ · NLP GEEK</div>
        <p>When we incorporate potentially implicit negative posts, the causal conclusion changes substantially.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-leonard">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">LEONARD · NETWORK NERD</div>
        <p>Under that revised specification, the analysis points to moderate but clear evidence <strong>in favor</strong> of the hypothesis.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-penny">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
        <p>So now it <em>does</em> look like shared enemies might lead to friendships.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>
          Yes—but because we changed what counts as hostility. Interactions that looked neutral or positive are now reclassified as negative.
        </p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-leonard">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">LEONARD · NETWORK NERD</div>
        <p>
          Which means relationships that were genuinely adversarial—but previously miscounted—stop being treated like friendly or neutral ties.
        </p>
      </div>
    </div>

  </div><!-- end .chat-thread -->

  <!-- ========================= -->
  <!-- CAUTION -->
  <!-- ========================= -->
  <div class="narrator-block narrator-block--clean">
    <div class="narrator-avatar">
      <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Narrator avatar">
    </div>
    <div class="narrator-body">
      <div class="narrator-label">Narrator · Data Redditor</div>
      <p class="narrator-lead"><strong>CAUTION AND LIMITATIONS</strong></p>
    </div>
  </div>

  <div class="chat-thread">

    <div class="chat-msg chat-msg-left chat-raj">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">RAJ · NLP GEEK</div>
        <p>But that revised conclusion comes with a warning label.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>Those “implicit negatives” come from modeling choices and assumptions, not verified ground truth.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-leonard">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">LEONARD · NETWORK NERD</div>
        <p>So we should interpret them as <em>possible</em> hidden hostility, not confirmed hostility.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-penny">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
        <p>Meaning the positive result depends on assumptions we can’t fully prove.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>Exactly.</p>
      </div>
    </div>

  </div><!-- end .chat-thread -->

  <!-- ========================= -->
  <!-- FINAL TAKEAWAY -->
  <!-- ========================= -->
  <div class="narrator-block">
    <div class="narrator-avatar">
      <img src="{{ '/assets/img/narrator.png' | relative_url }}"
           alt="Reddit-style narrator avatar">
    </div>
    <div class="narrator-body">
      <div class="narrator-label">Narrator · Data Redditor</div>
      <p class="narrator-lead"><strong>FINAL TAKEAWAY</strong></p>
    </div>
  </div>

  <div class="chat-thread">

    <div class="chat-msg chat-msg-left chat-leonard">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">LEONARD · NETWORK NERD</div>
        <p>So what can we actually say with confidence?</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>
          That the relationship between co-attacking and friendship formation is highly sensitive to how negative interactions are defined and measured.
        </p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-raj">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">RAJ · NLP GEEK</div>
        <p>
          Mislabeling—or failing to observe—negative interactions can change both the <strong>direction</strong> and the <strong>magnitude</strong> of the estimated effect.
        </p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-penny">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
        <p>So the proverb isn’t universally true or false.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-right chat-sheldon">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">SHELDON · THEORIST</div>
        <p>No. Its validity depends on how well we can identify hostility in the data.</p>
      </div>
    </div>

    <div class="chat-msg chat-msg-left chat-leonard">
      <div class="chat-avatar">
        <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
      </div>
      <div class="chat-bubble">
        <div class="chat-name">LEONARD · NETWORK NERD</div>
        <p>
          And without reliable ground truth for negativity, any “positive” conclusion has to be treated cautiously.
        </p>
      </div>
    </div>

  </div><!-- end .chat-thread -->

  <div class="narrator-block">
    <div class="narrator-avatar">
      <img src="{{ '/assets/img/narrator.png' | relative_url }}"
           alt="Reddit-style narrator avatar">
    </div>
    <div class="narrator-body">
      <div class="narrator-label">Narrator · Data Redditor</div>
      <p>
        In the end, the strongest result isn’t about friendship or enemies—
        it’s about how much our conclusions depend on what we are able to observe.
      </p>
    </div>
  </div>



> **FADE OUT.**

And that’s how a proverb from geopolitics, a network of noisy subreddits, and four scientists with way too much whiteboard space turned into <strong>The Enemy of my Enemy is my Friend Theory</strong>.

