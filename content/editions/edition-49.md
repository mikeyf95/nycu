# Edition 49 - NYCU
**Period:** 1st - 11th September 2026
**Status:** Final

## Opening

Once again, while we have been assessing the market, the market has moved. OpenAI released Astra, suppliers continued their enthusiastic rebranding of everything as an “agent”, and new research suggests that people are already turning to general-purpose AI when they encounter legal problems.

The common thread is that AI is not only becoming more capable – it is being given more to do. Models are moving into the products we are assessing, agents are taking on larger chunks of work, and clients may arrive with AI-generated analysis before a lawyer becomes involved.

For us, that creates both an opportunity and a moving target. Astra may bring previously unavailable capabilities into our approved tools, while better agents may make meaningful work packages worth delegating. The value will depend on whether we test the right things, preserve human judgement and design services around how people are actually using AI – rather than how we assume they will use it.

## Aside

### Agentic fatigue: generative AI, AI agents and agentic AI – a short explainer

We have all now been handed something a vendor calls an “agent”, but the word is being used for quite different things – and is beginning to lose all meaning; when something means everything, it means nothing. The following is, hopefully, a helpful working distinction.

**Generative AI** produces content when asked. You give it an instruction and it returns text, a summary, a draft clause, an image, then waits for the next prompt; e.g. you might paste in a clause and ask whether its wording is unusual.

An **AI agent** combines a generative model with tools and some autonomy (ergo ***agency***). You set an objective and it works through the steps needed to complete it. Ask it to check forty contracts for change-of-control provisions and it can *locate* the documents, *review* them, and *report* what each contains.

Then **agentic** describes behaviour rather than a particular product. A system is more *agentic* when it can choose its route to a goal and adapt when something unexpected happens. Some suppliers apply the term to one agent; others reserve it for several agents working together. Both uses are established, so the word alone no longer really tells us what a product actually does.

The platforms we're assessing illustrate – and, in a way, compound – the problem; Legora calls its advanced assistant Agent or Agent Pro. Harvey uses Agents, Workflow Agents and Agent Builder for both configured workflows and planning systems. Vesence has its main Agent, configured Custom Agents and delegated subagents. The same word therefore covers assistants, workflows, configurations and orchestrated systems.

In short: **generative AI *creates*, agents *act*, and agentic systems *pursue goals*.**

## Deep Dives

### Astra moves the frontier again

[OpenAI - GPT-6 Astra announcement](https://openai.com/index/gpt-6-astra/) | [OpenAI - Astra safety overview](https://openai.com/index/safety-overview-gpt-6-astra/) | [OpenAI - Legora financial-statement review case study](https://openai.com/index/legora-financial-statement-review-with-astra/) | [Microsoft Foundry - GPT-6 Astra in Azure AI Foundry](https://devblogs.microsoft.com/foundry/gpt-6-astra-in-azure-ai-foundry/) | [Anthropic - Fable and Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)

- **What:** OpenAI released GPT-6 Astra on 3 September, describing it as its most capable model yet across computer use, browsing, software engineering, cybersecurity, science and professional work. Initial access is limited, with availability beginning through OpenAI and Microsoft Foundry before a broader rollout, but it's accessible in a few of the products we're testing, like Legora for example. The important change is not simply a higher benchmark score. Astra is designed for longer, multi-step work across tools and professional software: researching, navigating interfaces and producing documents, spreadsheets and presentations that follow an organisation’s instructions and templates.

  There is already a legal example. Legora says its Agent used Astra to complete a financial-statement tie-out across 41 documents in minutes, checking balances against supporting material and recording each result for review. In Legora’s testing, Astra found all four planted errors – including a £500,000 discrepancy – and improved performance by nearly 40% over the previous model on that particular workflow. Across Legora’s wider benchmark, however, the average improvement was closer to 3%, so this is evidence of a potentially significant gain on some tasks rather than a uniform step-change across legal work.

  Astra also arrives with unusually significant safeguards. OpenAI has assessed it as the first model to meet the “Critical” cybersecurity threshold in its Preparedness Framework. With the right tools and access, OpenAI says it can identify unknown vulnerabilities and develop exploits without step-by-step human guidance. Its release therefore includes restricted access to advanced cyber capabilities, additional monitoring and stronger infrastructure controls.

- **So what:** For us, the most interesting question may be whether Astra starts to level the playing field. We cannot currently use Anthropic models because of our security requirements, and releases such as Fable and Mythos have sometimes created the sense that we are missing access to part of the frontier. Anthropic describes those products as the same underlying model offered with different safeguards, with Mythos restricted to trusted-access programmes for higher-risk work. Astra is not a direct equivalent, and access to it through a legal-AI product will not necessarily expose everything the underlying model can do. But if the products available to us begin incorporating Astra – as Legora already has – it could provide a route to frontier capabilities we can actually evaluate and deploy within our approved environment.

  That makes the Summer Assessment more dynamic. Our results are a **snapshot of a product, model and configuration at a particular point in time**, not a permanent verdict. We should record which model was tested, who controls model selection, how upgrades are introduced and whether a material model change triggers fresh testing. The Legora results also show why that testing must remain task-specific. A large improvement on one financial-review workflow sat alongside a much smaller average gain across the wider benchmark. Astra may materially improve some of the work we care about – larger document sets, multi-step tasks and navigation across systems – without improving every use case equally. This also ties the comparison back to governance, as touched on in the last edition. Fable, Mythos and Astra demonstrate that access to a model is shaped by the safeguards, permissions and product layer around it. The immediate question is therefore not simply whether Astra is better, but which of its capabilities reach our tools, under what controls, and whether they narrow a gap we have previously had to accept.

**Sources:** [OpenAI - GPT-6 Astra announcement](https://openai.com/index/gpt-6-astra/) | [OpenAI - Astra safety overview](https://openai.com/index/safety-overview-gpt-6-astra/) | [OpenAI - Legora financial-statement review case study](https://openai.com/index/legora-financial-statement-review-with-astra/) | [Microsoft Foundry - GPT-6 Astra in Azure AI Foundry](https://devblogs.microsoft.com/foundry/gpt-6-astra-in-azure-ai-foundry/) | [Anthropic - Fable and Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)

### From answers to work packages

[OpenAI - The shift to agentic AI: evidence from Codex](https://openai.com/index/the-shift-to-agentic-ai-evidence-from-codex/) | [OpenAI - Research acceleration: a view inside OpenAI](https://openai.com/index/research-acceleration-view-inside-openai/) | [Microsoft - GPT-6 Astra generally available in Microsoft Foundry](https://azure.microsoft.com/en-us/blog/gpt-6-astra-frontier-intelligence-for-work-now-generally-available-in-microsoft-foundry/)

- **What:** A new OpenAI study of tens of millions of Codex interactions suggests that the unit of work being handed to AI is getting larger. Users are asking it to tackle tasks estimated to take people progressively longer, including requests representing more than eight hours of human work, and are increasingly running several sessions at once.

  That does not mean Codex reliably completes an eight-hour job without intervention. The durations are estimates of the work being requested, not measured time saved or proof that every output was accepted. But the direction is significant: people are beginning to delegate chunks of work rather than individual questions.

  OpenAI makes a similar claim about its own research teams. It says it has reached an internally defined “automated research intern” milestone: a system capable of carrying out well-defined, human-directed research tasks that would take a skilled researcher several days. Researchers still choose the priorities, decide which results are worth pursuing and retain responsibility for consequential decisions.

- **So what:** For us, the important distinction is not whether a vendor calls something an agent or “agentic”. It is whether the product can take a **bounded work package**, maintain the objective across several steps and return something that is genuinely ready for review.

  That could mean assembling a chronology, comparing a set of documents, populating a diligence checklist, researching an issue across agreed sources or producing a first draft using our templates. The lawyer still defines the objective, authoritative material, boundaries and standard of completion – and decides whether the result is usable.

  Our assessments therefore need to test the whole trajectory, not just the final answer. Did the system use the right sources? Did it preserve the state of the documents and systems it touched? Can we see what it did? How much correction was required? And did it stop where human approval was expected?

  The near-term opportunity is not autonomous ownership of legal work. It is better-supervised delegation of the preparation, checking and synthesis around it. That may make work worth doing which previously took too much time – but only if reviewing the output is easier than doing the task ourselves.

**Sources:** [OpenAI - The shift to agentic AI: evidence from Codex](https://openai.com/index/the-shift-to-agentic-ai-evidence-from-codex/) | [OpenAI - Research acceleration: a view inside OpenAI](https://openai.com/index/research-acceleration-view-inside-openai/) | [Microsoft - GPT-6 Astra generally available in Microsoft Foundry](https://azure.microsoft.com/en-us/blog/gpt-6-astra-frontier-intelligence-for-work-now-generally-available-in-microsoft-foundry/)

### AI has entered the client journey

[JUSTICE - What AI chatbots can teach us about unmet legal needs](https://justice.org.uk/reports/what-ai-chatbots-can-teach-us-about-unmet-legal-needs) | [JUSTICE - One in six people with a legal problem turning to AI for advice](https://justice.org.uk/news/one-in-six-people-with-a-legal-problem-turning-to-ai-for-advice---new-research)

- **What:** New research from JUSTICE and the Administrative Fairness Lab suggests that general-purpose AI is already becoming part of how people deal with legal problems.

  The researchers surveyed 3,287 UK adults. Of the 1,428 who had experienced a legal issue in the previous two years, 233, or 16.3%, had used an AI chatbot for help. Usage was highest among younger respondents: 26% of 18–24-year-olds had used one, compared with 10% of those aged 55–64.

  The study also examined 77 chatbot conversations shared by participants. People were not only asking for basic legal information. They used AI to interpret correspondence, draft complaints, consider strategy, check professional advice and obtain emotional reassurance while dealing with stressful disputes.

  The research is based partly on self-reported behaviour and a relatively small volunteered sample of conversations, so it is not a benchmark of chatbot accuracy. Its significance is that it provides direct evidence of how people are already using these tools when facing real housing, employment, debt, consumer and family problems.

- **So what:** For AG, this means AI is not only changing how legal work is produced. It is changing what clients may bring into the legal process.

  Clients may increasingly arrive with AI-generated explanations, correspondence or assumptions about their position (I've already dealt with a few clients who have). Some of that material may be useful; some may be incomplete, incorrect or expressed with more confidence than the underlying answer warrants.

  That creates practical opportunities. Intake processes could identify where AI has already been used. Client guidance could explain how to use public tools more safely. And source-grounded, professionally supervised products could offer something general chatbots can't: advice that clients can understand and trust.

  The wider point is simple. The adoption question is no longer confined to whether lawyers will use AI. People with legal problems are already doing so, whether or not the profession has designed services around that behaviour.

**Sources:** [JUSTICE - What AI chatbots can teach us about unmet legal needs](https://justice.org.uk/reports/what-ai-chatbots-can-teach-us-about-unmet-legal-needs) | [JUSTICE - One in six people with a legal problem turning to AI for advice](https://justice.org.uk/news/one-in-six-people-with-a-legal-problem-turning-to-ai-for-advice---new-research)

## Worth Reading

### Legal Market and Delivery

- **[Litera launches Lito and its AI Hub](https://www.litera.com/news/litera-launches-lito-and-ai-hub-bringing-secure-governed-ai-to-more-than-80000-legal-professionals):** Litera says its legal AI is now available to more than 80,000 professionals through a governed platform spanning drafting, review and firm knowledge. The scale is significant; the accuracy, adoption and productivity claims remain supplier-reported.

- **[Legora introduces its agentic operating system](https://legora.com/newsroom/legora-introduces-the-legora-aos-the-agentic-operating-system-for-legal-work):** Legora is positioning aOS as the connective layer between legal information, communications and execution. The interesting question is whether it becomes useful infrastructure or simply makes one supplier the gateway to more of the legal workflow.

- **[Lexroom expands through acquisitions in France and Bulgaria](https://www.lexroom.ai/de/blog/legal-ai-in-europa-lexroom-expandiert-mit-ersten-ubernahmen-nach-frankreich-und-bulgarien):** The acquisitions of Query Juriste and Praven Intelekt take Lexroom into five European markets. This is another indication that jurisdiction-specific legal data and local workflows may be a stronger moat than the underlying general model.

- **[RELX completes its acquisition of Doctrine](https://www.lexisnexis.com/community/pressroom/b/news/posts/relx-completes-acquisition-of-doctrine-and-sets-ambition-to-serve-one-million-legal-professionals-across-europe):** Doctrine now sits within LexisNexis CEMEA, bringing a European legal-AI platform and its content further inside a major legal-information incumbent. The one-million-user ambition is a target, not an outcome.

- **[Filevine adds citation and anti-hallucination checks to LOIS](https://www.filevine.com/news/filevine-introduces-anti-hallucination-for-lois-legal-research/):** Filevine says LOIS can verify authorities, quotations and whether cited cases support the propositions made. It is a useful product direction, but jurisdictional coverage, false positives and effectiveness still require independent testing.

### Policy, Courts and Governance

- **[UK Government publishes an AI Risk Management Toolkit](https://www.gov.uk/government/publications/ai-risk-management-toolkit/ai-risk-management-toolkit-guidance):** This is guidance rather than a new legal regime. Its value is practical: it translates responsible-AI principles into a lifecycle process covering identification, assessment, treatment, monitoring and reporting.

- **[US Department of Justice proposes a settlement with RealPage](https://www.justice.gov/opa/pr/justice-department-requires-realpage-end-sharing-competitively-sensitive-information-and):** The case is about rental-pricing software and information sharing, not generative AI. It is nevertheless a useful reminder that automated-system risk can arise from aggregated data, incentives and coordinated recommendations, even where no chatbot is involved.

- **[Keeping Children Safe in Education 2026 takes effect](https://assets.publishing.service.gov.uk/media/6a9081309a177a1decf97b00/Keeping_children_safe_in_education_2026.pdf):** The guidance expressly addresses AI-generated sexual imagery within existing safeguarding duties. It does not create a separate deepfake offence, but it shows established compliance frameworks being updated for generative content.

- **[Home Office begins market engagement for an AI delivery partner](https://www.contractsfinder.service.gov.uk/Notice/59e303fc-b728-4783-9e34-119e6b473705):** This is a prior-information notice, not an award. It signals that public-sector AI delivery will require an assured implementation and governance model, rather than simply access to capable models.

### Models, Agents and Risk

- **[Google introduces agentic video understanding](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/):** Gemini can choose which frames, audio and transcript segments to inspect rather than processing a video uniformly. The potential relevance to investigations and evidence review is clear, but Google’s cost and accuracy improvements remain benchmark claims.

- **[Google releases Gemini 3.8 Flash and Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/):** Google distinguishes generally available Flash from a cyber model restricted to trusted defenders through Fairwind. The split is a useful prompt for model-routing and work-type approvals; performance claims remain supplier-reported.

- **[Anthropic formalises Fermat’s Last Theorem](https://www.anthropic.com/research/formalizing-fermats-last-theorem):** Claude reportedly produced a complete Lean formalisation of an established proof, allowing the output to be checked by software. The broader significance is verification infrastructure, not a new mathematical discovery or proof that unstructured professional outputs are equally reliable.

- **[READY reframes enterprise-agent evaluation around required human review](https://arxiv.org/html/2609.02095v1):** The preprint asks how much human oversight and cost are required to achieve a defined reliability threshold, rather than relying on headline task accuracy. Its demonstration is in clinical audit, so transfer to legal work remains to be tested.

### Capability and People

- **[Stanford launches a Legal Engineering Academy](https://law.stanford.edu/stanford-legal-engineering-academy/):** Stanford is formalising a hybrid legal and technical capability focused on systems, workflows and implementation. It is a useful signal that legal engineering is becoming a teachable professional discipline rather than an informal specialism.

- **[Vanderbilt Law introduces AI-supported deposition simulation](https://law.vanderbilt.edu/vanderbilt-law-partners-with-altaclaro-to-become-the-first-law-school-to-offer-ai-powered-deposim-to-students/):** DepoSim gives students repeatable advocacy practice with AI-supported feedback. The initiative has not yet produced outcome data, but it illustrates capability development moving from lectures about AI to practical simulation.

- **[What work does generative AI actually do?](https://www.nber.org/papers/w35677):** This US working paper supports a picture of widespread but relatively shallow adoption. Access and occasional use do not necessarily mean that work has been redesigned; the paper is not yet peer reviewed and is not specific to legal services.

- **[Workers’ perspectives on AI](https://www.bostonfed.org/publications/current-policy-perspectives/2026/workers-perspectives-on-ai.aspx):** The research records rising concern about personal job loss alongside self-reported productivity gains. It measures perceptions rather than observed displacement, but reinforces the need for credible training and career pathways alongside deployment.
