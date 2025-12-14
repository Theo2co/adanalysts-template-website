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
          For each flip, measure <strong>Δt</strong>: time until the next interaction with the opposite sentiment.
        </p>
      </div>
    </div>

    <div class="narrator-math">
      $$s_{\text{flip}}=\exp\!\left(-\frac{\Delta t}{\text{Median Interval}}\right)$$
    </div>

    <ul class="narrator-points">
      <li><strong>Fast reversal</strong> ⇒ Δt small ⇒ <strong>s<sub>flip</sub> ≈ 1</strong></li>
      <li><strong>Slow reversal</strong> ⇒ Δt large ⇒ <strong>s<sub>flip</sub> → 0</strong></li>
    </ul>

    <p class="narrator-footer">
      This makes the score comparable across pairs with very different activity rhythms.
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


# Scene 3 – The Experiment: Testing The Enemy of my Enemy is my Friend Theory {#results}

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – EVEN MORE WHITEBOARD.</strong> The board now shows triangles:
    A, B, C with arrows pointing to C, and little hearts between A and B.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Okay, Professor Crazy, remind me what exactly you’re trying to prove.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Formal statement: for communities A, B, C, if A and B both attack C, does that increase the probability that A and B later interact positively with each other?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>In human terms: co-attack → friendship boost?</p>
    </div>
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

