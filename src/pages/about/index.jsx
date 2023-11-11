import profile from "../../../public/vesikalık.png"

export default function About() {
    const aboutText = "Merhaba! Ben Engin, Bursa'da yaşıyorum. 2018-2023 yılları arasında İnönü Üniversitesi Bilgisayar Mühendisliği eğitimi gördüm. Okulun ilk yıllarından beri tasarıma olan ilgim, beni bugün Frontend ile buluşturdu. Grafik tasarım alanında yaptığım hobi ve profesyonel iş hayatımdaki çalışmalarımın katmış olduğu bakış açısı ile mühendislik bakış açısını birleştirerek frontend kariyerine bir yön vermek ve ilerlemek en büyük hedeflerimden biridir.Heyecanla sürdürdüğüm kariyerimde ve öncesinde çeşitli teknoloji ve disiplinlerde çalışma fırsatı buldum. Teknolojiye ve bu işe olan ilgimin projelerime de yansıdığını düşünüyorum.";

    const projects = [
        { name: "Horse Racing", link: "https://github.com/enqinsel/horse-racing" },
        { name: "Product Catalog", link: "https://github.com/enqinsel/product-catalog" },
        { name: "Find image by searching", link: "https://github.com/enqinsel/find-image-by-searching" },
        { name: "Quiz App", link: "https://github.com/enqinsel/quizApp-with-strapi" },
    ];

    const socialMediaLinks = [
        { name: "Youtube", link: "https://www.youtube.com/@enginyazilim" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/engininsel/" },
        { name: "GitHub", link: "https://github.com/enqinsel" },
    ];

    return (
        <div className="container mx-auto mt-8 mb-36">
            <div className="text-center">
                <img src={profile} alt="Profil Resmi" className="mx-auto rounded-full w-48 " />
                <p className="mt-4 text-lg leading-8">{aboutText}</p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Projelerim</h2>
                <ul className="mt-4 space-y-2">
                    {projects.map((project, index) => (
                        <li key={index}>
                            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{project.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Sosyal Medya</h2>
                <div className="mt-4 flex space-x-4">
                    {socialMediaLinks.map((socialMedia, index) => (
                        <a key={index} href={socialMedia.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            {socialMedia.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
