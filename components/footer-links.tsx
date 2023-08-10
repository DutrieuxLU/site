import {
  Instagram,
  Discord,
  Github,
  Linkedin,
  Mastodon
} from '@icons-pack/react-simple-icons'

const FooterLinks = () => (
  <div className="flex flex-row justify-center gap-x-8">
    <a
      href="https://github.com/DutrieuxLU"
      className="transition hover:scale-110 hover:text-[#3d3e40]"
      target="_blank"
    >
      <Github height={32} width={32} />
    </a>
    <a
      href="https://puhack.horse/discord"
      className="transition hover:scale-110 hover:text-discord-vibrant"
      target="_blank"
    >
      <Discord height={32} width={32} />
    </a>
    <a
      href="https://www.instagram.com/lukas.dutrieux/?next=%2F"
      className="transition hover:scale-110 hover:text-[#c32aa3]"
      target="_blank"
    >
      <Instagram height={32} width={32} />
    </a>
    <a
      href="https://www.linkedin.com/in/lukas-dutrieux/"
      className="transition hover:scale-110 hover:text-[#1DA1F2]"
      target="_blank"
    >
      <Linkedin height={32} width={32} />
    </a>
    <a
      href="https://mastodon.social/@DutrieuxL"
      rel="me"
      className="transition hover:scale-110 hover:text-[#563acc]"
      target="_blank"
    >
      <Mastodon height={32} width={32} />
    </a>
  </div>
)

export default FooterLinks
