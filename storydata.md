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

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p><strong>INT. APARTMENT 4A – WHITEBOARD CORNER.</strong> Three timelines are drawn, with
    red and blue arrows marking sentiment between pairs of subreddits.</p>
    <p>Phase one of the theory is all about debugging the labels before making causal claims.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Phase one of The Enemy of my Enemy is my Friend Theory:
      <em>Thou shalt not build causal claims on mislabeled insults.</em></p>
    </div>
  </div>

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>Translation: step 1 = find the fake smiles.</p>
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
    <p>They attack the problem from three angles: <strong>time</strong>, <strong>language</strong>,
    and <strong>context</strong>.</p>
  </div>
</div>

## 2.1 Time – Mood swings that make no sense

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>For each ordered pair (A, B), Leonard looks at the sequence of interactions
    A → B over time:</p>
    <ul>
      <li>mostly <strong>negative</strong> edges (red),</li>
      <li>and occasionally a single <strong>non-negative</strong> edge (blue) squeezed between reds.</li>
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
      <p>If two subreddits scream at each other for months, and suddenly we get one “non-negative” message <em>exactly</em> between two fights… I’m not buying the instant reconciliation arc.</p>
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
    <p>They compute the typical delay between sentiment switches for each pair,
    and compare it to the actual delays around suspicious non-negative edges.</p>
    <p>When a flip from negative → non-negative → negative happens <strong>much faster</strong>
    than usual for that pair, the middle edge becomes a <strong>temporal suspect</strong>.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So if someone says “no offence, but…” right between two insults, you assume it’s not a real hug?</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Yes. We call that the <em>Law of Sarcasm Conservation</em>.</p>
    </div>
  </div>

</div>

## 2.2 Language – When “non-negative” swears a lot

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>Raj turns to the text itself. For each post, he computes:</p>
    <ul>
      <li>a <strong>VADER compound</strong> sentiment score,</li>
      <li>LIWC-style features: <em>Anger</em>, <em>Swear</em>, <em>Dissent</em>, <em>You/They</em> pronouns.</li>
    </ul>
    <p>He then compares the distributions for posts labelled negative vs. non-negative.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-raj">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-raj.png' | relative_url }}" alt="Raj">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">RAJ · NLP GEEK</div>
      <p>Check this out. The model saw “you idiots” and thought: “seems neutral”.</p>
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
    <p>A small tail of “non-negative” posts looks linguistically just as angry as
    negative ones. These become <strong>language suspects</strong>, especially when
    they overlap with temporal suspects.</p>
  </div>
</div>

## 2.3 Context – Hostility in embedding space

<div class="chat-thread">

  <div class="chat-msg chat-msg-right chat-sheldon">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-sheldon.png' | relative_url }}" alt="Sheldon">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">SHELDON · THEORIST</div>
      <p>Hostility is relational. Two similar communities can tease each other nicely. Distant ones are more likely to declare war.</p>
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
    <p>Using subreddit embeddings, they compute cosine similarity between the
    source and target of each interaction.</p>
    <ul>
      <li>Negative interactions tend to occur between <strong>less similar</strong> communities.</li>
      <li>Non-negative interactions are more common between <strong>similar</strong> ones.</li>
    </ul>
    <p>When a “non-negative” edge looks linguistically hostile, appears in a hostile
    temporal context, and connects distant embeddings, it becomes a strong
    <strong>hidden hostility candidate</strong>.</p>
  </div>
</div>

<div class="chat-thread">

  <div class="chat-msg chat-msg-left chat-leonard">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-leonard.png' | relative_url }}" alt="Leonard">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">LEONARD · NETWORK NERD</div>
      <p>If it quacks like an insult, swears like an insult, and flies between enemy camps, it’s probably… an insult.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>Is that how science works? You should put that on your grant proposals.</p>
    </div>
  </div>

</div>

## 2.4 Outcome – A cleaner map of grudges

<div class="narrator-block">
  <div class="narrator-avatar">
    <img src="{{ '/assets/img/narrator.png' | relative_url }}"
         alt="Reddit-style narrator avatar">
  </div>
  <div class="narrator-body">
    <div class="narrator-label">Narrator · Data Redditor</div>
    <p>They don’t manually relabel the entire dataset, but they:</p>
    <ul>
      <li>identify a non-trivial share of “non-negative” edges that behave like negative ones,</li>
      <li>understand where the classifier tends to fail,</li>
      <li>and rerun analyses with and without these suspects to check robustness.</li>
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
      <p>We have now debugged our enemies. The Enemy of my Enemy is my Friend Theory may proceed to Phase Two: measuring alliances.</p>
    </div>
  </div>

  <div class="chat-msg chat-msg-right chat-penny">
    <div class="chat-avatar">
      <img src="{{ '/assets/img/avatar-penny.png' | relative_url }}" alt="Penny">
    </div>
    <div class="chat-bubble">
      <div class="chat-name">PENNY · DEFINITELY NOT STEM</div>
      <p>So phase one was: “trust issues”. Phase two is: “dating drama”?</p>
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

