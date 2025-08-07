const posts = [
  {
    title: "Exploring JavaScript ES6",
    category: "Tech",
    date: "2025-07-01",
    image: "https://miro.medium.com/v2/resize:fit:2000/1*BPSx-c--z6r7tY29L19ukQ.png",
    description: "Learn about the powerful new features introduced in ES6."
  },
  {
    title: "A Trip to the Swiss Alps",
    category: "Travel",
    date: "2025-06-15",
    image: "https://res.cloudinary.com/enchanting/q_80,f_auto,c_fit,w_640,h_480/exodus-web/2024/10/AdobeStock_402537784.jpeg",
    description: "Breathtaking views and travel tips for your next trip."
  },
  {
    title: "The Future of AI",
    category: "Tech",
    date: "2025-06-05",
    image: "https://communication.ucf.edu/wp-content/uploads/sites/2/2023/12/30493_large-300x180.jpg",
    description: "How artificial intelligence is shaping tomorrow."
  },
  {
    title: "Tasty Tacos at Home",
    category: "Food",
    date: "2025-05-20",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2022-08/10/15/asset/a6073a4ad145/sub-buzz-1699-1660145107-3.jpg",
    description: "A quick recipe to make authentic tacos in 15 minutes."
  },
  {
    title: "Why I Love Solo Traveling",
    category: "Travel",
    date: "2025-04-30",
    image: "https://i0.wp.com/modernmanadvice.com/wp-content/uploads/2019/06/Traveling-Solo2-300x180.jpg",
    description: "My experience and tips for traveling alone."
  },
  {
    title: "Top 5 Programming Languages in 2025",
    category: "Tech",
    date: "2025-04-10",
    image: "https://scand.com/wp-content/uploads/2019/03/blog.svg",
    description: "Find out which programming languages are trending."
  },
  {
    title: "Italian Pasta From Scratch",
    category: "Food",
    date: "2025-03-22",
    image: "https://images.squarespace-cdn.com/content/v1/5dd5b5e9f226644911c4d733/1632856351292-A448T7ULQK0N8XQ8Y6MB/famous-italian-pasta-dishes.jpg",
    description: "A simple and delicious pasta recipe from Italy."
  }
];

const postsPerPage = 3;
let currentPage = 1;

const postContainer = document.getElementById("postContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");

function displayPosts() {
  const searchKeyword = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  let filteredPosts = posts.filter(post => {
    const matchesTitle = post.title.toLowerCase().includes(searchKeyword);
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesTitle && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  currentPage = Math.min(currentPage, totalPages || 1);

  const start = (currentPage - 1) * postsPerPage;
  const visiblePosts = filteredPosts.slice(start, start + postsPerPage);

  postContainer.innerHTML = visiblePosts.map(post => `
    <div class="post-card">
      <img src="${post.image}" alt="${post.title}" />
      <div class="content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <div class="date">📅 ${post.date}</div>
      </div>
    </div>
  `).join("");

  pageIndicator.textContent = `Page ${currentPage} of ${totalPages || 1}`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

searchInput.addEventListener("input", () => {
  currentPage = 1;
  displayPosts();
});
categoryFilter.addEventListener("change", () => {
  currentPage = 1;
  displayPosts();
});
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPosts();
  }
});
nextBtn.addEventListener("click", () => {
  currentPage++;
  displayPosts();
});

displayPosts();
