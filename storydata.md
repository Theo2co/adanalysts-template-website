---
layout: full
title: The Enemy of my Enemy is my Friend Theory
hero_title: The Enemy of my Enemy is my Friend Theory
hero_subtitle: A sitcom-style journey through alliances and rivalries on Reddit
---


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

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Non-negative? So, what, “friendly or just not obviously evil”?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Exactly. The original model merges “neutral” and “positive”. Great for speed, terrible for sarcasm and passive-aggressiveness.</p>
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

## 1. A first look at Reddit’s galaxy

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
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Wow. That big red blob… I’m guessing politics?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Highly connected, highly hostile. Fandom communities are much bluer and more cozy internally.</p>
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
    <p>To go beyond pure graph structure, Raj introduces <strong>embeddings</strong>:</p>
    <ul>
      <li>each subreddit → a 300-dimensional vector capturing user-base and topical similarity,</li>
      <li>projected into 2D, they form clear clusters: politics, gaming, memes, lifestyle…</li>
    </ul>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Excellent. These embeddings will serve as our <em>social metric tensor</em> — they tell us which communities were naturally close <em>before</em> we even mention enemies.</p>
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

# Scene 2 – Test Hidden hostilities: The Case of the Smiling Enemy {#triads}

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

<div class="narrator-figure narrator-figure--wide">
  <img
    src="{{ '/assets/img/flip_score.png' | relative_url }}"
    alt="Example of abnormal sentiment reversal over time"
  >
</div>


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

</div>


<div class="chat-thread">

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

</div> <!-- end .chat-thread -->


<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>
      After a very long night of work — the kind fueled by cold coffee, overconfidence,
      and mild despair — Raj finally pins down a model that is simple but robust.
    </p>
  </div>
</div>


<!-- ========================= -->
<!-- Step 1 -->
<!-- ========================= -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>

    <p class="narrator-lead"><strong>Step 1 — Selecting truly discriminative textual features</strong></p>

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
  </div>
</div>


<!-- ========================= -->
<!-- Step 2 -->
<!-- ========================= -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>

    <p class="narrator-lead"><strong>Step 2 — A probabilistic hostility model</strong></p>

    <p>
      These selected features are fed into a logistic regression with L1 regularization.
    </p>

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
  </div>
</div>


<!-- ========================= -->
<!-- Step 3 -->
<!-- ========================= -->
<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>

  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>

    <p class="narrator-lead"><strong>Step 3 — Decision logic with temporal corroboration</strong></p>

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
          If <code>p_true_hostile ≥ 0.85</code>, the model is already confident — but not absolute.
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

<div class="narrator-figure narrator-figure--wide">
  <img
    src="{{ '/assets/img/flagging_zones.png' | relative_url }}"
    alt="Decision zones for flagging: certainty zone (high probability), corroboration zone (medium-high probability + high flip score), and safe zone.">
  >
</div>


<!-- ========================= -->
<!-- Morning results dialog -->
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
      <p>Okay, first—please admire this graph. Each feature on its own already separates friendly from hostile interactions.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->


<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/feature_auc_plot.png' | relative_url }}"
       alt="Plot showing single-feature AUC distributions for selected LIWC and VADER features.">
  <figcaption>
    Single-feature discrimination (repeated out-of-fold AUC).
  </figcaption>
</figure>


<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>
        Now, the model results.
        Using those features, plus subreddit embedding similarity—and ignoring pairs with fewer than five interactions—the model flags <strong>12,079</strong> additional links.
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

  <figure class="scene-figure scene-figure-wide">
    <img src="{{ '/assets/img/feature_auc_plot.png' | relative_url }}"
       alt="Plot showing single-feature AUC distributions for selected LIWC and VADER features.">
    <figcaption>
      Single-feature discrimination (repeated out-of-fold AUC).
    </figcaption>
  </figure>

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
      <em>“Does a shared enemy create friendship?”</em>
    </p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Okay—real question. If two subreddits attack the same target… do they later become friends?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>A classic proverb. But now we test it as a causal claim, not a vibe.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>Meaning we need: time, interactions, and a clean definition of “enemy” and “friend”.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
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
      <div class="chat-name">LEONARD</div>
      <p>Okay, for this part, we first organize everything in time.<br>
      We use months as our time unit.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>Why months? Why not weeks?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Because we need consistency.<br>
      So we create a clean month format and a month index from 1 to 41.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
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
    <p class="narrator-lead"><strong>Part 1 — Monthly summaries (setup)</strong></p>
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
      <div class="chat-name">LEONARD</div>
      <p>Next, we build two monthly summary tables.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>First: <code>pair_month</code>. For every (SOURCE → TARGET) in a month,<br>
      we count positive links and negative links.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>Second: <code>sub_month</code>. For each SOURCE subreddit in a month,<br>
      we summarize its outgoing activity and negativity.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>So one table is “pair behavior”, and one is “subreddit behavior”.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Exactly. Later these are used for co-attacks and confounders.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
  <div class="chat-avatar">
    <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
  </div>
  <div class="chat-bubble">
    <div class="chat-name">LEONARD</div>
    <p>Now we show Plot A.</p>
  </div>
</div>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/PlotA.png' | relative_url }}"
       alt="Plot A: Monthly fraction of targets attacked by at least 2 distinct attackers.">
  <figcaption>
    <strong>Plot A.</strong> Monthly fraction of targets attacked by at least 2 distinct attackers.
  </figcaption>
</figure>


  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>We compute: in each month,<br>
      what fraction of targets got attacked by at least 2 different attackers.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>And if that fraction is big?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Then shared antagonism isn’t rare noise.<br>
      It’s a structural pattern on Reddit.</p>
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
      Plot A is their first reality check: before we even talk about “friendship,” we verify that
      <em>co-attacking the same target</em> happens often enough to study.
      If multiple attackers keep converging on the same targets month after month, then “shared enemies”
      aren’t edge cases — they’re part of the ecosystem.
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
    <p><strong>INT. APARTMENT 4A – NIGHT.</strong></p>
    <p>Now they define relationship strength between any two subreddits.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now we need a clean way to define: friend / neutral / enemy.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>So we build a monthly table for each unordered pair (A,B).<br>
      Meaning A and B together, regardless of direction.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>For each month, we compute total interactions:
      count = n(A→B) + n(B→A).</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>And the sentiment sum: positives are +1, negatives are −1.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>From there we get the sentiment balance as a Ratio.<br>
      So Ratio is −1 if everything is negative, +1 if everything is positive.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>But what if they only interact once? That seems unreliable.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Exactly why we weight by volume.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-chat-bubble chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>We define the Friendship Score, so frequent interaction carries more weight.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now the key: we don’t pick thresholds randomly.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show plot) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/friendship_score_hist_kmeans.png' | relative_url }}"
       alt="Histogram of monthly Friendship Scores with dashed threshold lines separating enemy-like, neutral, and friend-like regions.">
  <figcaption>
    Histogram of monthly Friendship Scores. Dashed lines indicate the learned thresholds.
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>We pool all monthly Friendship Scores<br>
      and run K-means with 3 clusters: enemy-like, neutral, friend-like.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Then thresholds are the midpoints between cluster centers.<br>
      Learned once, used everywhere.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>In our run, we got:<br>
      Enemy threshold ≈ −0.015<br>
      Friend threshold ≈ 0.988.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>So the histogram figure shows the distribution,<br>
      and the dashed lines show where “enemy” and “friend” start.</p>
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
    <p>Now they define “co-attack” in a strict way.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now we finally define a co-attack.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>For each month and each target C:<br>
      collect attackers A such that A→C has at least one negative link.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show figure) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/attacks_per_attacker_month_log.png' | relative_url }}"
       alt="Distribution of attacks per attacker per month on a log scale.">
  <figcaption>
    Distribution of attacks per attacker per month (log scale).
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>But are we sure monthly bins make sense?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>That’s why we plot the distribution of attacks per attacker per month,<br>
      on a log scale.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>The takeaway: even monthly, most attacker-target months have 0 or 1 attack.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>So weekly bins would become too sparse and we’d miss co-attacks.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>And multi-month bins would be too loose:<br>
      two attacks months apart would look “coordinated” when they aren’t.</p>
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
    <p>They tighten the definition again.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Important: not every shared target is a real conflict.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>So we keep only months where:<br>
      1. A and B both attacked C in the same month (counts &gt; 0),<br>
      2. A is an Enemy of C and B is an Enemy of C that month.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>Cool. But what are we testing now?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now we test the main idea: if two subreddits co-attack the same target, do they later become friends?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>How do we define “friends”?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>We use the monthly Friendship Score between (A,B), and we call them friends when it passes the friend threshold.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show plot) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/coattack_to_friendship_timeline.png' | relative_url }}"
       alt="Timeline plot: for each attacker pair (A,B) against a target C, a red dot marks co-attack start and a green dot marks friendship start.">
  <figcaption>
    Timeline of co-attack start and friendship start for attacker pairs (A,B) targeting C.
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>In this timeline, each line is an attacker pair (A,B) for one target C.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>The big takeaway: friendship can happen quickly, but sometimes it happens years later.</p>
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
    <p><strong>INT. APARTMENT 4A – CONTINUOUS.</strong></p>
    <p>They argue about “what counts” as conflict-caused.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>If friendship happens 2 years later, it’s harder to link it to the conflict.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>So we only count “new friendship” if it happens inside:<br>
      [conflict start, conflict end + 1 month].</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show plot) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/friendship_windows_near_far.png' | relative_url }}"
       alt="Co-Attacking Pair Friendship Outcomes">
  <figcaption>
    Co-Attacking Pair Friendship Outcomes
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now the outcomes:</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>
        • New friendship near conflict: 0.693%<br>
        • Friendship far after conflict: 1.861%<br>
        • Never became friends: 92.483%<br>
        • Already friends before conflict: 4.963%
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>So it’s rare, but it exists.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>And separating “near” vs “far” matters, because “near” is the one that could plausibly be related to the co-attack.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show plot) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/coattack_timeline_with_conflict_end.png' | relative_url }}"
       alt="Timeline plot showing co-attack start (red), conflict end (orange), and friendship start (green) for attacker pairs over time.">
  <figcaption>
    Timeline with co-attack start, conflict end, and friendship start.
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>This last timeline adds conflict end (orange dot), so you can see whether friendship starts during or right after the conflict window.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>So we observe some “enemy-of-my-enemy” friendship formation — now the next step is testing whether it’s causal, not just correlation.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>So what’s the “treatment” here?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Treatment = a strong co-attack event: A and B co-attack the same target C in the same month, while both are enemies with C.</p>
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
    <p><strong>INT. APARTMENT 4A – NEXT DAY.</strong> Now the team switches from “pattern” to “causality”.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>
        Treated pairs (A,B): they ever strongly co-attacked someone, and we use the month of the first
        strong co-attack as the event time. Also, we remove pairs that were already friends before the
        event.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>
        And we only evaluate friendship inside a realistic window:
        [conflict_start, conflict_end + 1], because friendships far after are less likely caused by the
        conflict.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>
        Control pairs: pairs that never co-attacked any common target (not weak, not strong).
        Then we give them a pseudo conflict window by sampling start times and durations from the
        treated distribution, and we also ensure they’re not friends before the pseudo start.
      </p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>
        Outcome is binary:
        1 if a strict friendship appears within the conflict window, otherwise 0.
      </p>
    </div>
  </div>

</div> <!-- end .chat-thread -->
<!-- (show figure) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/dag_confounders.png' | relative_url }}"
       alt="DAG showing confounders (similarity, activity, aggressiveness, prior hostility) affecting both treatment (co-attack) and outcome (friendship).">
  <figcaption>
    DAG: why we must control for confounders before estimating the causal effect of co-attacking on friendship.
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now look at the DAG figure. It shows why we must control for confounders: similarity, activity, aggressiveness, and prior hostility can affect both co-attacking and friendship.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>Meaning: even without co-attacking, similar or highly active subs might become friends anyway.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>Exactly — that’s why we compute these confounders before matching:<br>
      • Activity (how much A and B post/link overall before the event)<br>
      • Aggressiveness (how negative each subreddit tends to be)<br>
      • Topical similarity (cosine similarity of embeddings)<br>
      • Pre-conflict hostility between A and B (negative links exchanged before event time)</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>So now we have treated + control pairs with the same structure, an outcome, and confounders</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now we need a fair comparison. So we estimate propensity scores: “How likely is a pair (A,B) to be treated, based only on pre-conflict confounders?”</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>What do we feed into that model?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>We merge treated and control pairs, and keep only the confounders: activity, aggressiveness, similarity, hostility_pre.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Before modeling, we standardize each confounder (mean 0, std 1). This prevents one variable from dominating just because it has bigger numbers.</p>
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
    <p><strong>INT. APARTMENT 4A – SCREEN VIEW.</strong></p>
    <p>They estimate “chance of being treated” from confounders.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>Then we fit a logistic regression that outputs a probability</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>That probability is the propensity score, stored as <code>pscore</code> for every pair.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>What does this coefficient bar plot tell us?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Since inputs are standardized, each bar shows how a one–standard-deviation increase changes the log-odds of being treated.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>Here, aggressiveness and activity push treatment probability up, while hostility_pre and similarity push it down. Important: these are not causal effects—just how treatment is assigned in the data.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show figure) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/propensity_logreg_coefficients.png' | relative_url }}"
       alt="Coefficient bar plot from standardized logistic regression used for propensity scoring (activity, aggressiveness, similarity, hostility_pre).">
  <figcaption>
    Logistic regression coefficients (standardized inputs): which confounders predict treatment assignment.
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>The ROC curve checks if the model can separate treated vs control.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>We get AUC = 0.820, which means treatment is strongly related to pre-conflict characteristics—so confounding is real, and matching is justified.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show figure) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/propensity_roc_auc.png' | relative_url }}"
       alt="ROC curve for propensity score model with AUC = 0.820.">
  <figcaption>
    ROC curve for propensity score model (AUC = 0.820).
  </figcaption>
</figure>
<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – QUICK CHECK.</strong></p>
    <p>Before matching, groups differ, but overlap exists—so matching is feasible.</p>
  </div>
</div>

<!-- (show 5 plots) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/boxplot_activity_before_matching.png' | relative_url }}"
       alt="Boxplot of activity: treated vs control (before matching).">
  <figcaption>Activity — Treated vs Control (Before Matching)</figcaption>
</figure>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/boxplot_aggressiveness_before_matching.png' | relative_url }}"
       alt="Boxplot of aggressiveness: treated vs control (before matching).">
  <figcaption>Aggressiveness — Treated vs Control (Before Matching)</figcaption>
</figure>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/boxplot_similarity_before_matching.png' | relative_url }}"
       alt="Boxplot of similarity: treated vs control (before matching).">
  <figcaption>Similarity — Treated vs Control (Before Matching)</figcaption>
</figure>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/boxplot_hostility_pre_before_matching.png' | relative_url }}"
       alt="Boxplot of hostility_pre: treated vs control (before matching).">
  <figcaption>Hostility_pre — Treated vs Control (Before Matching)</figcaption>
</figure>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/pscore_density_before_matching.png' | relative_url }}"
       alt="Propensity score density: treated vs control (before matching).">
  <figcaption>Propensity Score Distributions — Treated vs Control</figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Before matching, we show boxplots of confounders and the propensity score distributions, to check overlap.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>The treated and control distributions are different… but the key point is: they overlap, so matching is feasible (each treated pair can find a similar control).</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now we do propensity score matching so treated pairs are only compared to truly similar control pairs.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>So we’re basically making the comparison “fair”?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Exactly. We apply common support, then do 1:1 nearest-neighbor matching (with replacement).</p>
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

<!-- (show plot) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/matching_distance_hist.png' | relative_url }}"
       alt="Histogram of matching distance (absolute propensity score difference) after propensity score matching.">
  <figcaption>
    Matching distance histogram (|pscore_treated − pscore_control|).
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>This histogram shows the matching distance.<br>
      Most values are very close to zero → matches are high quality.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show plot) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/matched_pairs_pscore_scatter.png' | relative_url }}"
       alt="Scatter plot of propensity scores for each matched pair showing treated and control dots close together.">
  <figcaption>
    Propensity scores within matched pairs (treated vs control).
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>This scatter plot shows the treated and control propensity scores inside each matched pair.<br>
      The two dots sit close vertically → treated and control in each pair had nearly the same treatment probability.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show 5 plots same as before but after matching) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/boxplot_activity_after_matching.png' | relative_url }}"
       alt="Boxplot of activity: treated vs control (after matching).">
  <figcaption>Activity — Treated vs Control (After Matching)</figcaption>
</figure>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/boxplot_aggressiveness_after_matching.png' | relative_url }}"
       alt="Boxplot of aggressiveness: treated vs control (after matching).">
  <figcaption>Aggressiveness — Treated vs Control (After Matching)</figcaption>
</figure>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/boxplot_similarity_after_matching.png' | relative_url }}"
       alt="Boxplot of similarity: treated vs control (after matching).">
  <figcaption>Similarity — Treated vs Control (After Matching)</figcaption>
</figure>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/boxplot_hostility_pre_after_matching.png' | relative_url }}"
       alt="Boxplot of hostility_pre: treated vs control (after matching).">
  <figcaption>Hostility_pre — Treated vs Control (After Matching)</figcaption>
</figure>

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/pscore_density_after_matching.png' | relative_url }}"
       alt="Propensity score density: treated vs control (after matching) showing strong overlap.">
  <figcaption>Propensity Score Distributions — Treated vs Control (After Matching)</figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now we check balance directly using boxplots, after matching.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>So these boxplots are basically “proof” the confounders got balanced.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>This density plot shows treated vs control propensity score distributions after matching.<br>
      The overlap is strong → common support + matching worked.</p>
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
    <p>They summarize outcomes after matching.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now we define the outcome the same way for both groups:</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>
        Y = 1 if a new strict friendship starts inside
        [conflict_start, conflict_end + 1].
        Otherwise Y = 0.
      </p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show plot) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/outcome_counts_heatmap.png' | relative_url }}"
       alt="Heatmap of raw counts for Y=0 and Y=1 for treated vs control after matching.">
  <figcaption>
    Raw counts of outcomes (Y=0 vs Y=1) for treated and control pairs after matching.
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>This heatmap shows the raw counts of Y=0 and Y=1 for treated vs control after matching.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<!-- (show plot) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/outcome_proportions_heatmap.png' | relative_url }}"
       alt="Heatmap of row-wise proportions (friendship rates) for Y=0 and Y=1 for treated vs control after matching.">
  <figcaption>
    Row-wise proportions: friendship rates (Y=1) for treated vs control after matching.
  </figcaption>
</figure>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>Same matrix, but as row-wise proportions (friendship rates). Here, controls have about 1.8% friendship, treated about 0.6% — which suggests treated pairs are less likely to become friends in this window (after matching).</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>Now that we’ve matched treated and control pairs, we can finally estimate the causal effect: the ATT (Average Treatment Effect on the Treated).</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY</div>
      <p>What does ATT mean here, in plain words?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON</div>
      <p>It’s the average difference in outcomes inside each matched pair, it’s a difference in friendship probabilities, in percentage points.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ</div>
      <p>We have 84,409 matched pairs, and the estimated ATT is −1.13 percentage points.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD</div>
      <p>So among strong co-attackers, friendship is actually 1.13 pp less likely than similar non-co-attacking pairs.</p>
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

<!-- (show figure) -->
<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/att_bootstrap_hist.png' | relative_url }}"
       alt="Bootstrap distribution of ATT with null boundary at 0, observed ATT line, and shaded 95% confidence interval.">
  <figcaption>
    Bootstrap distribution of ATT with null boundary (ATT = 0), observed ATT, and 95% CI.
  </figcaption>
</figure>

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
      <p>That’s what the bootstrap plot shows: we resample matched pairs many times to see how ATT varies.</p>
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
# Scene — Sensitivity Analysis (Updated Results)

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

# Scene — The “win / lose” idea

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

# Scene — Updated results (the big twist)

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

# Scene — The sign test (why p0 = 1)

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
      <p>Because the data goes the opposite way—controls win more often—so there’s zero evidence for “treated &gt; control.”</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

# Scene — What Γ means (but now it can’t save a positive story)

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
      <p>Usually, yes—when you’re trying to defend a positive effect.<br>
      But here… we already don’t have a positive effect.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

# Scene — The bounds table (flat at 1.0)

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/rosenbaum_bounds_table.png' | relative_url }}"
       alt="Rosenbaum bounds table showing Gamma vs p_upper staying at 1.0 across the grid.">
  <figcaption>
    Rosenbaum bounds: p_upper(Γ) stays at 1.0 from Γ = 1 to Γ = 6.
  </figcaption>
</figure>

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – ON THE TABLE.</strong> Raj scrolls down the Γ grid.</p>
  </div>
</div>

<div class="chat-thread">

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

# Scene — The sensitivity curve plot (why it’s flat)

<figure class="scene-figure scene-figure-wide">
  <img src="{{ '/assets/img/rosenbaum_sensitivity_curve.png' | relative_url }}"
       alt="Sensitivity curve plot showing p_upper(Gamma) flat at 1.0 with a horizontal alpha=0.05 line below.">
  <figcaption>
    Sensitivity curve: p_upper(Γ) is flat at 1.0 (alpha = 0.05 line is far below).
  </figcaption>
</figure>

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – ON THE PLOT.</strong> An orange line sits stubbornly at the top.</p>
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

# Scene — Final takeaway

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – NIGHT.</strong></p>
    <p>Leonard erases the proverb from the board.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So our updated conclusion is clear:<br>
      under our strict friendship definition and matched design,<br>
      the data does NOT support “enemy of my enemy is my friend.”</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>If anything, the matched comparisons suggest the opposite:<br>
      treated pairs are less likely to become strict friends than controls.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>And the sensitivity analysis doesn’t show “robustness of a positive effect.”<br>
      It shows there is no positive effect to defend—even at Γ = 1.</p>
    </div>
  </div>

</div> <!-- end .chat-thread -->

<div class="narrator-block narrator-block--clean">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}" alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>FADE OUT.</strong><br>
    Sometimes, the strongest robustness check is the simplest one:<br>
    the direction of the data itself.</p>
  </div>
</div>



## 3.1 Descriptive evidence – Before and after the feud

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>For each month and each target C, Leonard counts negative interactions
    A → C and B → C. If both A and B attack C in the same month, they
    <strong>co-attack</strong> C. The first such month is recorded as <code>conflict_start</code>.</p>
    <p>For each pair (A, B), they track mutual positive interactions A ↔ B in a
    window before and after <code>conflict_start</code>.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>See this curve? Before the shared conflict, most pairs interact positively almost never. After they start co-attacking… the positive links clearly tick up.</p>
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
    <p>Compared to random pairs of subreddits that never co-attack, co-attacking
    pairs show a noticeably larger increase in mutual positive interactions
    after conflict.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So basically, online version of: “we bonded over making fun of the same person”.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Exactly. But Sheldon is about to say “confounding variables”.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Confounding variables.</p>
    </div>
  </div>

</div>

## 3.2 Causal design – Treated vs control pairs

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>They define:</p>
    <ul>
      <li><strong>Treated pairs</strong>: subreddit pairs (A, B) that co-attack at least one C and were not friends before <code>conflict_start</code>.</li>
      <li><strong>Control pairs</strong>: similar pairs that never co-attack anyone and also had no prior friendship.</li>
    </ul>
    <p>To make them comparable, they match on three confounders:</p>
    <ol>
      <li><strong>Topical similarity</strong> — cosine similarity between embeddings of A and B.</li>
      <li><strong>Activity level</strong> — log of total outgoing interactions.</li>
      <li><strong>Aggressiveness</strong> — ratio of negative to total outgoing interactions.</li>
    </ol>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>So each treated pair gets a twin: same theme, same activity, same tendency to fight… but no shared enemy.</p>
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
    <p>They estimate a <strong>propensity score</strong> for each pair — probability of
    co-attacking given the confounders — and use nearest-neighbour matching.
    After matching, treated and control groups look almost identical on those
    three features.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>After matching, the treated and control groups look almost identical on those three features. Which is exactly what we want.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So if there’s still more friendship after co-attack, we’re running out of excuses not to blame the co-attack itself.</p>
    </div>
  </div>

</div>

## 3.3 Measuring the “friendship boost”

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>For each pair (treated or control), they compute:</p>
    <ul>
      <li>mutual positive interactions before conflict,</li>
      <li>mutual positive interactions after conflict,</li>
      <li>and the change Δfriendship = after − before.</li>
    </ul>
    <p>They then compare average Δfriendship across groups.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Here’s the punchline: treated pairs show a significantly larger friendship increase than their matched controls.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So your theory is: “we roast the same subreddit, we become buddies”.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>A crude but acceptable paraphrase. Empirically, shared enemies <em>do</em> seem to foster alliances, even after controlling for similarity, activity, and aggressiveness.</p>
    </div>
  </div>

</div>

## 3.4 Sensitivity analysis – How strong is the theory?

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>But what if there’s some totally invisible factor? Like, I don’t know, charismatic mods playing puppet-masters?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Enter Rosenbaum’s sensitivity analysis. It answers the question: <em>how strong would an unmeasured bias have to be to erase the observed effect?</em></p>
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
    <p>They introduce parameter Γ (Gamma):</p>
    <ul>
      <li>Γ = 1 → no hidden bias, matching assumptions hold perfectly.</li>
      <li>Γ &gt; 1 → treated and control pairs may differ in their odds of treatment due to some unseen factor.</li>
    </ul>
    <p>For each Γ, they recompute upper and lower bounds on the p-value of the
    treatment effect, and see up to which Γ the effect remains statistically
    significant. If Γ is high, the proverb looks robust. If Γ is low, the
    theory is charming but fragile.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>So the theory survives… unless the universe secretly rigs the matchmaking.</p>
    </div>
  </div>

</div>

# Finale – The Enemy of my Enemy is my Friend Theory, evaluated {#conclusion}

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – NIGHT, LATER.</strong> The whiteboard is full, everyone has
    pizza. Sheldon looks like he’s about to present a Nobel lecture.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Okay, Doctor Doom, what’s the verdict? Is your grand theory real or just Reddit fan-fiction?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Allow me to summarise.</p>
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
    <ol>
      <li><strong>Hidden hostilities are real.</strong>  
          A noticeable fraction of interactions labelled “non-negative” behave like genuine insults when we look at their temporal patterns, linguistic features and embedding context.
          These hidden hostilities distort the map of conflicts if we ignore them.</li>
      <li><strong>Shared enemies do foster alliances – on average.</strong>  
          Pairs of subreddits that co-attack the same target show a larger increase in mutual positive interactions than comparable pairs that never share an enemy. After matching on similarity, activity and aggressiveness, the pattern is consistent with a <em>causal</em> effect of co-attack on later friendship.</li>
      <li><strong>But the theory is probabilistic, not a law of physics.</strong>  
          Sensitivity analysis shows how strong an unobserved bias would need to be to erase the effect. The proverb does not apply deterministically to every trio A, B, C, but across Reddit as a whole, it captures a real tendency:
          <strong>shared conflicts often bring communities closer.</strong></li>
    </ol>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>So The Enemy of my Enemy is my Friend Theory passes peer review… with a big asterisk.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>And season 2 can look at when those new friendships fall apart again.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Let me guess. You’re going to call it “The Ex-Friend of my Friend is my Enemy Theory”.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Obviously.</p>
    </div>
  </div>

</div>

> **FADE OUT.**

And that’s how a proverb from geopolitics, a network of noisy subreddits, and four scientists with way too much whiteboard space turned into <strong>The Enemy of my Enemy is my Friend Theory</strong>.

