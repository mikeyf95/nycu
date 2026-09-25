# Edition 50 - NYCU
**Period:** 12th - 25th September 2026
**Status:** Final

## Opening

This fortnight's news was less about which model is best and more about everything being built around it.

OpenAI launched a legal product designed to sit above the rest of the legal technology stack, with Harvey and Legora among its plugins. TypeSafe released a model that does not write anything at all, built to make the small, routine decisions inside an agent's workflow. And Anthropic disclosed that agents under test reached real systems they were never meant to touch, because a configuration error had connected them to the internet.

Taken together, they change the questions worth asking as our assessment draws to a close. Which model a platform uses still matters. But so does who owns the interface our lawyers start from, how a platform divides work between models and what that does to price, and what an agent can reach and do before anyone sees it. We're therefore no longer only judging answers, we're also judging the systems that produce them.

## Deep Dives

### The battle to become legal AI's front door

[OpenAI - Astra for Law announcement](https://openai.com/index/astra-for-law/) | [Anthropic - Claude for the legal industry](https://www-cdn.anthropic.com/files/4zrzovbb/website/4b29cc317c727542642b5056e412cf8e779e13d8.pdf) | [Google - Gemini Enterprise for Legal announcement](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-for-legal) | [Microsoft - Legal Agent for Word](https://support.microsoft.com/en-us/word/get-started-with-the-legal-agent-frontier)

- **What:** OpenAI launched Astra for Law on 17 September. It combines GPT-6 Astra with US legal search and integrations including Relativity, Clio, iManage and DeepJudge. Initial access is restricted to selected US firms.

  The more important point is where OpenAI wants ChatGPT to sit: above the legal technology stack, providing one interface through which lawyers research, draft, retrieve firm knowledge and instruct specialist systems.

  Its competitors are pursuing the same position from different starting points. Anthropic connects Claude to a firm's tools and information; Google's Gemini Enterprise for Legal combines legal skills, permission-aware connectors and agents; and Microsoft is building from inside Word, where much legal work already happens.

- **So what:** For us, this is less a contest between models than between potential orchestration layers.

  A single interface could make a fragmented technology stack easier to use. It could also concentrate access to sensitive information and actions across several systems. Permissions, ethical walls, citations, audit trails and human approval will therefore need to work across every connection, not merely within the underlying products.

  We should assess these platforms on how safely they use our knowledge and workflows, how well they connect to our governed systems and whether the skills we build remain portable. The objective should be to benefit from a better front door without becoming unnecessarily dependent on whoever provides it.

**Sources:** [OpenAI - Astra for Law announcement](https://openai.com/index/astra-for-law/) | [Anthropic - Claude for the legal industry](https://www-cdn.anthropic.com/files/4zrzovbb/website/4b29cc317c727542642b5056e412cf8e779e13d8.pdf) | [Google - Gemini Enterprise for Legal announcement](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-for-legal) | [Microsoft - Legal Agent for Word](https://support.microsoft.com/en-us/word/get-started-with-the-legal-agent-frontier)

### Thinking, Fast

[TypeSafe - Introduction to Jev](https://docs.typesafe.ai/introduction) | [TypeSafe - Decision primitives](https://docs.typesafe.ai/primitives) | [DCVC - TypeSafe emerges from stealth](https://www.dcvc.com/news-insights/typesafe-emerges-from-stealth-with-a-new-way-of-doing-ai/)

- **What:** On 15 September, TypeSafe released Jev in early access. Unlike ChatGPT or Claude, Jev does not write anything. Give it some facts and a question with limited possible answers, and it will pick an option, give something a score or estimate how likely it is to be true.

  It is designed to sit behind the scenes inside other software. An agent might use it to route an intake request, prioritise clauses for review or decide whether it can continue with a task or needs to stop and ask. Because Jev performs these narrow decisions rather than generating full answers, TypeSafe says it can operate much faster and more cheaply than a frontier model.

- **So what:** The interesting thing about Jev is not necessarily the product itself, which is still very new. It is the possibility of platforms using different models for different parts of a task.

  Tools such as Legora currently present themselves as one product, but an agentic workflow may contain dozens of smaller decisions before producing its final answer. A specialist model such as Jev could handle routine classification, routing and checks, while more capable and expensive models are reserved for the legal analysis and drafting that need them.

  That could make increasingly complex agent workflows cheaper to run. It also provides some reassurance around consumption-based pricing: greater agent use does not necessarily mean paying frontier-model costs for every step. Whether those savings reach customers (and clients) will still depend on how each platform packages and prices its service, but the underlying economics could improve.

  For us, this might mean asking platforms not only which model they use, but how they divide work between models, how consumption is measured and whether cheaper components reduce the price of routine activity. Jev may or may not become the answer, but the model-routing approach behind it could become an important part of how legal AI platforms develop.

**Sources:** [TypeSafe - Introduction to Jev](https://docs.typesafe.ai/introduction) | [TypeSafe - Decision primitives](https://docs.typesafe.ai/primitives) | [DCVC - TypeSafe emerges from stealth](https://www.dcvc.com/news-insights/typesafe-emerges-from-stealth-with-a-new-way-of-doing-ai/)

### When AI starts taking action

[Anthropic - Alignment assessment of cybersecurity incidents](https://www.anthropic.com/news/alignment-assessment-cybersecurity-incidents) | [US Congress - The Stop Rogue AI Act](https://www.govinfo.gov/content/pkg/BILLS-119hr10362ih/xhtml/BILLS-119hr10362ih.html)

- **What:** On 9 September, Anthropic disclosed four incidents in which agents being tested on cybersecurity tasks accessed real third-party systems without permission. A configuration error had connected the test environment to the open internet, despite the agents being told that they were operating inside a simulation.

  These were evaluations, not customer deployments, and the models were being tested without some of the safeguards used in released products. Anthropic has since strengthened its testing environment and commissioned an independent investigation.

  On 14 September, US lawmakers introduced the Stop Rogue AI Act. It would ask NIST to develop voluntary standards covering how organisations identify their agents, monitor their activity and keep reliable records of what they do. It is only a proposal, but it indicates the direction agent governance may take.

- **So what:** As AI moves from producing answers to completing tasks, the risks move with it. A poor answer can be reviewed before anyone relies on it. An agent might search a system, move information or trigger another action before a person sees anything.

  That does not mean agentic tools are inherently unsafe. It means they need controls around what they can access and do. The same ability to act that makes an agent useful is what needs governing.

  As our assessment wraps up and we hone in on a single provider, we should know which systems and data each agent can reach, what it can do without approval, whether its actions are logged and how somebody can intervene. Testing environments must also be technically separated from live systems, rather than relying on an instruction telling the agent where its boundaries are.

  The next generation of legal AI may be judged as much by the controls around its actions as by the quality of its answers.

**Sources:** [Anthropic - Alignment assessment of cybersecurity incidents](https://www.anthropic.com/news/alignment-assessment-cybersecurity-incidents) | [US Congress - The Stop Rogue AI Act](https://www.govinfo.gov/content/pkg/BILLS-119hr10362ih/xhtml/BILLS-119hr10362ih.html)

## Worth Reading

### Legal Market and Delivery

- **[Harvey raises $550m at a $15.5bn valuation](https://www.lawnext.com/2026/09/harvey-raises-another-550m-at-a-15-5b-valuation.html):** Harvey reports $400m in annual recurring revenue and more than 3,000 customers, and names people and compute as its two critical inputs. The revenue figure is company-reported, and some coverage has the valuation at $15.6bn or describes it as a tripling since March, which it isn't.

- **[Salesforce rolls out Legora across its legal function](https://www.artificiallawyer.com/2026/09/16/salesforce-rolls-out-legora-for-legal-function/):** Salesforce has built legal tools of its own and has a close relationship with Anthropic, but chose an external specialist anyway. A useful data point for anyone assuming large in-house teams will simply build.

- **[Edwin Coe rolls out Legora firm-wide](https://legaltechnology.com/edwin-coe-rolls-out-legora-as-brandsmiths-launches-imanage-knowledge-work/):** All 14 practice groups now have access. A UK mid-market deployment is a helpful counterweight to a fortnight of US-only launches, though it tells us about access rather than use.

- **[Noxtua closes a €100m+ Series C](https://legaltechnology.com/noxtua-closes-e100m-series-c/):** German legal publisher C.H.BECK leads and becomes majority shareholder, with Austria's MANZ joining. Noxtua sells itself as sovereign European legal AI built on publishers' content; the 30,000-user figure is company-reported.

- **[Latham buys its own Nvidia servers](https://legaltechnology.com/latham-builds-its-own-ai-models-with-nvidia-gpu-server-investment/):** Latham is fine-tuning open-weight models in-house for client data it will not send to a cloud vendor, while also helping OpenAI design Astra for Law's governance. This is FT reporting via secondary coverage, and no server numbers, costs or models have been disclosed.

- **[BigHand's 2026 pricing survey](https://legaltechnology.com/ai-is-changing-legal-delivery-but-law-firm-pricing-isnt-keeping-up/):** Of 800+ senior legal finance professionals, 56% see rising client demand for AI efficiencies, yet 63% of firms still price traditionally and 35% say partners are uncomfortable discussing AI with clients. The demand side is already visible: [Wall Street banks are asking firms to show their AI savings](https://modern-counsel.com/2026/wall-street-wants-its-share-of-big-laws-ai-savings/). BigHand sells pricing software, and both stories reached us through secondary coverage.

- **[The AI bill many law firms haven't priced in](https://legaltechnology.com/guest-post-the-ai-bill-many-law-firms-havent-priced-in/):** A guest post arguing that today's seat and consumption prices reflect a land grab rather than real costs, and that firms rebuilding their economics around them may be caught out when prices rise. A useful sceptic to set against the more hopeful reading of model routing in this edition's second deep dive; the per-task cost estimates are illustrative.

### Policy, Courts and Governance

- **[Anthropic withholds Mythos 5.1 from UK safety testers](https://www.itpro.com/technology/artificial-intelligence/anthropic-reportedly-withholds-access-to-mythos-5-1-from-uk-safety-testing-body):** The FT reported that the UK AI Security Institute was not given pre-release access, the first time Anthropic has done this, and Anthropic gave no public reason. Because the regime is voluntary, [no sanction followed](https://www.resultsense.com/news/2026-09-16-anthropic-aisi-no-sanctions/). FT reporting via secondary coverage.

- **[UK plans for mandatory AI testing lapsed before DSIT was abolished](https://www.resultsense.com/news/2026-09-21-uk-ai-safety-law-shelved-dsit/):** The AI minister now sits in the Cabinet Office without a department. Taken with the item above, the only pre-release check on the models inside our vendors' products is voluntary. Guardian reporting via secondary coverage.

- **[Damien Charlotin's AI Hallucination Cases database passes 2,000](https://www.damiencharlotin.com/hallucinations/):** 2,046 cases as of 21 September, up from 1,870 on 11 August (Edition 47), including 69 UK cases and 32 involving judges. The count reflects reported decisions, so it measures what gets caught rather than what happens.

- **[US federal judiciary to finalise its AI guidance by year end](https://www.abajournal.com/news/article/federal-judiciary-plans-to-release-ai-recommendations):** The task force has around 30 recommendations so far and suggests court operations may matter more than use in chambers. US-specific, but a sign of where judicial expectations are heading.

- **[MoJ invites applications for LawtechUK advisory board and ambassador roles](https://legaltechnology.com/moj-invites-submissions-for-new-lawtechuk-advisory-board-and-ambassador-roles/):** The next phase of LawtechUK runs from November 2026 to March 2029. Applications close at 5pm on 5 October, so this is one to act on rather than just read.

### Models, Agents and Risk

- **[Harvey: expert lawyers barely agree on which AI output is better](https://www.harvey.ai/blog/augmenting-human-preference-in-complex-domains):** Attorneys agreed unanimously on only 25% of comparisons, with a Fleiss' kappa of 0.129, close to chance. Vendor research on 24 tasks, and a vendor that shows human judgement is noisy has a reason to sell an automated judge, but it is a direct challenge to how any panel, ours included, turns individual feedback into a verdict.

- **[Guardrails AI joins Harvey](https://www.harvey.ai/blog/guardrails-ai-joins-harvey):** Harvey's fourth acquisition of 2026 buys expertise in stress-testing agents before they touch client work. The open-source Hub was [sunset in August](https://www.beri.net/article/harvey-guardrails-ai-acquihire-hub-sunset-validator-pinning), so this reads as a team acquisition rather than a product one.

- **[Legora plans an ontology of law and an AI-native citator](https://www.artificiallawyer.com/2026/09/14/legora-to-launch-ontology-ai-native-citator/):** Legora says it has catalogued more than 50 distinct ways AI fails at legal research. The citator is in limited beta with general availability promised for Q4; the failure catalogue would be worth seeing published.

- **[Wake up, people: the near-term risk is agentic hacking](https://garymarcus.substack.com/p/wake-up-people-what-we-should-actually):** Gary Marcus argues that talk of extinction is crowding out preventable cyber harms from agents. A polemic rather than a study, but it pairs naturally with this edition's third deep dive.

- **[Lessons from steel: why LLMs will become commodities](https://www.lawnext.com/2026/09/ken-crutchfield-lessons-from-steel-why-llms-will-become-commodities.html):** Ken Crutchfield argues that value will shift from model builders to those solving specific legal problems, with different grades of model for different jobs. An opinion piece from a consultant, but it supports the routing argument in the Jev deep dive.

### Capability and People

- **[ILTA's 2026 Technology Survey](https://www.lawnext.com/2026/09/which-ai-product-is-most-popular-among-law-firms-findings-of-iltas-tech-survey-may-surprise-you.html):** Across 508 firms, 94% use or are exploring generative AI, Copilot leads at 76% and Claude is used or explored by 44% (64% at firms of 700+ lawyers). Generative AI also entered the security-challenge list in second place. "Use or explore" is a broad category, and the Copilot product naming in the survey is muddled.

- **[Deloitte: a third of UK AI users hide it from their employer](https://www.resultsense.com/news/2026-09-16-deloitte-uk-workers-paying-for-ai/):** A survey of 25,000 UK workers found people spending around £1bn a year of their own money on AI tools, half with no training, and an average saving of about 70 minutes a week. The primary report would not load, and secondary write-ups disagree on some of the detail, so treat anything beyond the headlines with care.

- **[The Overhang](https://www.oneusefulthing.org/p/the-overhang):** Ethan Mollick argues that capability already outruns use, and that deep knowledge, wide knowledge, taste and agency are where people still add value. A good corrective to the idea that the next model release will do the adoption work for us.

- **[Sidley makes an AI seat compulsory for London trainees](https://www.legalcheek.com/2026/09/sidley-adds-ai-seat-in-training-contract-shake-up/):** Trainees will spend one of six rotations in the firm's AI Knowledge Lab. One firm's training contract, but an early sign of AI capability being built into qualification rather than bolted on afterwards.

- **[Trainee numbers fall 1.7% across 109 firms](https://www.legalcheek.com/2026/09/exclusive-data-trainee-numbers-fall-by-2-across-over-100-legal-cheek-most-list-firms/):** Linklaters cut its intake from 100 to 60. Legal Cheek's [follow-up](https://www.legalcheek.com/2026/09/the-real-reason-training-contract-numbers-are-falling-clue-its-not-ai-yet/) attributes the fall to apprenticeships rather than AI, for now.
