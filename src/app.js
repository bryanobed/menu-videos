const videos = [
  {
    title: "Video 1",
    description: "Estrategias para potenciar la salud",
    youtubeId: "LFC1p5_eRcQ",
  },
  {
    title: "Video 2",
    description: "Cuidador primario",
    youtubeId: "0899UR-WVu0",
  },
  {
    title: "Video 3",
    description: "Cuidados para respirar mejor",
    youtubeId: "e9CHduXLv_M",
  },
  {
    title: "Video 4",
    description: "Preguntas y respuestas",
    youtubeId: "zA7mW2bPu4o",
  },
  {
    title: "Video 5",
    description: "El diario de un cuidador",
    youtubeId: "1xagHxUk_7A",
  },
  {
    title: "Video 6",
    description: "Tipos de tos",
    youtubeId: "0-OLQiwjV8s",
  },
  {
    title: "Video 7",
    description: "Cómo consumir más alimentos",
    youtubeId: "63taCXz-erg",
  },
  {
    title: "Video 8",
    description: "Regulación emocional",
    youtubeId: "U1k8Etijtfw",
  },
  {
    title: "Video 9",
    description: "Cuidados paliativos",
    youtubeId: "QAXwFAl9V7k",
  },
];

const container = document.getElementById("videoList");

videos.forEach(video => {
  const card = document.createElement("article");

  // card.className ="bg-neutral-900/80 backdrop-blur rounded-2xl p-4 shadow-lg hover:scale-[1.02] transition";
  card.className = `
  relative
  bg-white/5
  backdrop-blur-xl
  border border-white/10
  rounded-3xl
  p-5
  shadow-[0_20px_40px_rgba(0,0,0,0.6)]
  hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]
  hover:-translate-y-1
  transition-all
  duration-300
  `;


  card.innerHTML = `
    <div class="absolute inset-0 rounded-3xl bg-linear-to-br from-white/4 to-transparent opacity-0 hover:opacity-100 transition">
    </div>

    <lite-youtube
      videoid="${video.youtubeId}"
      poster="https://i.imgur.com/9hWmlVm.jpeg"
      class="w-full aspect-video rounded-2xl overflow-hidden mb-4 ring-1 ring-white/10">
    </lite-youtube>

    <h2 class="text-lg font-semibold">
      ${video.title}
    </h2>

    <p class="text-sm text-neutral-400 mt-1">
      ${video.description}
    </p>
  `;

  container.appendChild(card);
});

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");

  setTimeout(() => {
    if (loader) loader.remove();
  }, 150); // 
});
