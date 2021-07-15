## User stories

- Maria works for a funder en wants to ensure the funding helps as many people as possible. For a paper which depends on software for its results, that means you have to be able to accurately cite the software used to produce the results produced in the paper. She wants to make it obligatory for newly funded research to make sure their code is not only open but also citable, but she feels that she can only recommend this once she's confident that the website will give the users a good experience
- Shelly is a publisher at AGU. She wants to maximize the value of a given paper. Papers that are **reproducible** because they accurately cite what software was used for a paper, are more valuable.
- Peter is a developer who contributed to an existing project and now wants to also be **recognized** as an author of the software. The software already has a CITATION.cff file. He wants to be able to **load** the CITATION.cff information somehow, and then just add his own details and be done.
- Bouwe is a developer for a software package that has **many contributors**. His project does not yet have a CITATION.cff file. He wants to **automatically populate** the CITATION.cff file with the information about whoever is listed as a **contributor on his repository**.
- Stefano is a developer for a software package that has **many contributors**. His project does not yet have a CITATION.cff file but has been published on Zenodo. He wants to **automatically populate** the CITATION.cff file with the **information associated with the DOI**.
- Jan is a Phd student, who has developed some code that he wants people to cite. He has stumbled upon a link in the GitHub docs that point to cffinit. He wants to get this done in 5 minutes. Jan wants an easy way of getting the CITATION.cff file from cffinit to his repo. It should be clear to him that the minimal amount of work that is required of him is in fact a small amount of work, and he can come back later to make it better.
- Julia is a developer whose software was cited, but incorrectly because the citers didn't have access to **accurate** metadata pertaining to the software. She would like to have way to supply future citers with unambiguous data regarding e.g. the name of the software, the list of authors, etc
- Yoda is a Professor. He doesn't develop much software anymore himself, but more junior members of his research group do. He wants his group to be credited for the work they put in. He wants to send out an email to everybody in his group explaining why they need to make their software citable, and wants to include a link to cffinit to help people get started.
- Jezza is a researcher who wants to be able to accurately cite a piece of software that they **did not develop themselves**


## out of scope

- citing software developed by commercial companies


## Requirements

### milestones

1. Replicate the green cffinit v1 site's behavior but nicer
    - Jan  
3. Add editing options based on existing CITATION.cff in a given github repo that users supply
4. Two way editing form -> text, text -> form
5. Add bringing in information from GitHub API, and offer functionality to merge the two information sources
6. Add bringing in information from Zenodo API, and offer functionality to merge the two information sources
7. Add support for preferred-citation
8. Add support for references





