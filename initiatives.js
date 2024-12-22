// Data array containing all initiatives
const initiatives = [
  {
    title: "Access Docs for Artists",
    url: "https://www.accessdocsforartists.com",
    description: "Resources and documentation for artists"
  },
  {
    title: "Decolonial Hacker",
    url: "https://decolonialhacker.org",
    description: "Decolonial perspectives in art and technology"
  },
  {
    title: "W.A.G.E.",
    url: "https://wageforwork.com/",
    description: "Working Artists and the Greater Economy"
  },
  {
    title: "Weaving Liberation",
    url: "https://weavingliberation.org",
    description: "Collective art and liberation practices"
  },
  {
    title: "Soup Du Jour Collective",
    url: "https://www.facebook.com/SdJcollective",
    description: "Activist Group of Intersectional Feminism in the Art World"
  },
  {
    title: "Art Leaks",
    url: "https://art-leaks.org/",
    description: "Platform for exposing institutional wrongdoing"
  },
  {
    title: "Art + Museum Transparency",
    url: "https://docs.google.com/spreadsheets/d/14_cn3afoas7NhKvHWaFKqQGkaZS5rvL6DFxzGqXQa6o/edit?gid=0#gid=0",
    description: "All museums salary transparency (2019)"
  },
  {
    title: "P.A.I.N.",
    url: "https://www.sacklerpain.org/",
    description: "Advocacy for accountability in art institutions"
  },
  {
    title: "Precarious Workers Brigade",
    url: "https://precariousworkersbrigade.tumblr.com/ethicscode",
    description: "UK-based group of precarious workers in culture & education"
  },
  {
    title: "Migrants in Culture",
    url: "https://migrantsinculture.com/",
    description: "Support network for migrants in arts and culture"
  },
  {
    title: "Gulf Labor Artist Coalition",
    url: "https://gulflabour.org/",
    description: "Advocating for workers' rights in art institutions"
  },
  {
    title: "Decolonize This Place",
    url: "https://www.artnews.com/art-news/news/we-will-come-back-decolonize-this-place-leads-protest-at-whitney-marches-to-controversial-board-members-house-12590/",
    description: "Leads protests at Whitney Museum in New York"
  },
  {
    title: "Index on Censorship",
    url: "https://www.indexoncensorship.org/2011/12/palestinian-artist-censorship-lacoste-elysee-prize/",
    description: "A voice for the persecuted"
  },
  {
    title: "The Museum of Dissidence",
    url: "https://www.indexoncensorship.org/2019/05/museum-of-dissidence-cubas-new-constitution-does-not-represent-us-as-cubans-intellectuals-or-humans/",
    description: "Cuba's new constitution does not represent us as Cubans, intellectuals or humans"
  },
  {
    title: "Siyah Bant",
    url: "https://web.archive.org/web/20210619100310/https://siyahbant.org/",
    description: "Documents, analyzez, and archives cases of censorship in the arts"
  },
  {
    title: "Arts of the Working Class",
    url: "https://artsoftheworkingclass.org",
    description: "Bimonthly street journal with multilingual contributions, focused on working-class issues"
  },
  {
    title: "Kunstenaars Honorarium",
    url: "https://kunstenaarshonorarium.nl/en/",
    description: "Fair pay guidelines for artists"
  },
  {
    title: "Future Climates",
    url: "https://www.facebook.com/futureclimates/",
    description: "Platform that aims to propose viable futures for independent cultural practice"
  },
  {
    title: "International Fact-Checking Network",
    url: "https://ifcncodeofprinciples.poynter.org",
    description: "Guidance for publishing nonpartisan reports on the accuracy of statements by public figures and institutions"
  },
  {
    title: "Art Workers Italia",
    url: "https://artworkersitalia.it",
    description: "Supporting Italian art workers' rights"
  },
  {
    title: "Art Not Genocide Alliance",
    url: "https://anga.live",
    description: "Advocacy against cultural genocide"
  }
];

// Function to generate HTML for a single initiative
function createInitiativeHTML(initiative) {
  return `
    <a href="${initiative.url}" target="_blank"
       class="group bg-white p-6 rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
        <h3 class="font-bold text-lg group-hover:text-red-600 transition-colors">${initiative.title}</h3>
        <p class="text-sm text-slate-600 mt-2">${initiative.description}</p>
    </a>
  `;
}

// Function to generate the entire initiatives section
function generateInitiativesSection() {
  const initiativesHTML = initiatives.map(createInitiativeHTML).join('');

  return `
    <section id="initiatives" class="my-20">
      <h2 class="text-3xl font-bold mb-8">Sister Initiatives</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${initiativesHTML}
      </div>
    </section>
  `;
}

// Insert the initiatives section into the page
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  if (footer) {
    // Insert before the footer instead of at the end of main
    footer.insertAdjacentHTML('beforebegin', generateInitiativesSection());
  }
});
