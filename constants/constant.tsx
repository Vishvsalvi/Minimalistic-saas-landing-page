import {Brain, FileVideo, Copyright, Activity, Users, HandCoins, CreditCard, Heart} from "lucide-react"
import { JSX } from "react"

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

interface Agent {
  id: number;
  name: string;
  description: string;
  inspiration: string;
  img: string;
}

interface Testimonial {
  id: number;
  name: string;
  image: string;
  testimonial: string;
  job: string;
}

export const FEATURES: Feature[] = [
    {
      id: 1, 
      title: "AI-Powered Composition",
      description: "Generate original, royalty-free music in seconds with intelligent AI agents trained on diverse genres.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Drag & Drop Simplicity",
      description: "A user-friendly interface designed for creators — no music theory or DAW experience required.",
      icon: <FileVideo className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Flexible Licensing",
      description: "Use your tracks anywhere — from YouTube to commercial ads — with transparent, creator-friendly terms.",
      icon: <Copyright className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Always Available",
      description: "99.99% uptime across global servers ensures your creative flow is never interrupted.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Collaboration Ready",
      description: "Invite collaborators, share projects, and manage multiple users with secure access controls.",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Real-Time AI Feedback",
      description: "Get live suggestions on tempo, mood, and genre to shape the sound you want — faster.",
      icon: <HandCoins className="w-6 h-6" />
    },
    {
      id: 7,
      title: "No Strings Attached",
      description: "Try EveryAI risk-free. No credit card needed. Cancel anytime — but we think you'll stay.",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      id: 8,
      title: "Endless Sound Possibilities",
      description: "From cinematic scores to trap beats, explore an ever-expanding library of AI-generated styles.",
      icon: <Heart className="w-6 h-6" />
    }
  ]; 

export const AGENTS: Agent[] = [
    {
      id: 1,
      name: "Mozi",
      description: "Mozi is your go-to for composing beautiful, structured melodies—ideal for classical, cinematic, and ambient music. It balances emotion and order with effortless precision.",
      inspiration: "Inspired by Mozart",
      img: "/agent1.png"
    },
    {
      id: 2,
      name: "Duko",
      description: "Duko is all about groove and flow. From jazz and blues to lo-fi and neo-soul, Duko adds rich rhythm, smooth chords, and a laid-back vibe to every track.",
      inspiration: "Inspired by Duke Ellington",
      img: "/agent2.png"
    },
    {
      id: 3,
      name: "Jim",
      description: "Jim shreds through genres with bold, energetic compositions. It's perfect for rock, funk, or any style where you want raw creativity and edge.",
      inspiration: "Inspired by Jimi Hendrix",
      img: "/agent3.png"
    }
  ]

export const TESTIMONIALS: Testimonial[] = [{
    id: 1,
    name: "Elon Musk",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkbeT8JyLt5-vKpbS5HxmzGU8gj-4t57Vpzg&s",
    testimonial: "MusicGen is the best AI powered music assistant I've ever used. It's so easy to use and the results are amazing.",
    job: "CEO of SpaceX and Tesla"
  },
  {
    id: 2,
    name: "Sam Altman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6N1VBd9yC7WYLWEruqw20N4AHvW2hyl8k0w&s",
    testimonial: "It is just amazing to see how MusicGen can generate music so quickly and so well. I'm a huge fan of the product.",
    job: "CEO of OpenAI"
  },
  {
    id: 3,
    name: "Jeff Bezos",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6SdblZ7IPiP8r5OlcwCrWsXrusO25s_ghQ&s",
    testimonial: "The Mozi agent is a great agent for composing classical music. I just love it.",
    job: "Founder of Amazon"
  }, {
    id: 4,
    name: "Virat Kohli",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBILvRXOCiUXmnpLgar3ya1JvIk0uMVRhgsQ&s",
    testimonial: "The agentic approach to music composition is a game changer. Can't wait to see what the future holds for MusicGen.",
    job: "Cricket Legend"
  }, {
    id: 5,
    name: "Taylor Swift",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS48Z7Enb7OH7nR-VDFu0Yi11uMNEvNNUO5Q&s",
    testimonial: "I use MusicGen at the end of my songwriting process to add that final touch of magic. It's like having a personal composer at your fingertips.",
    job: "Pop Star"
  },{
    id: 6,
    name: "Hans Zimmer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7E4McmZyhZpWaG8IBBESHCxCrrgjZ5DXWg&s",
    testimonial: "I never thought I'd see the day when I could compose music like this. MusicGen is a game changer.",
    job: "Composer"
  },{
    id: 7,
    name: "Arijit Singh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTIBM64dZzJK0azu-eGTtN55oSR9OsPoLsA&s",
    testimonial: "I use MusicGen to compose music for my movies. It's like having a personal composer at your fingertips.",
    job: "Singer"
  }]

export const BRAND_IMAGES = [
    {
      id: 2,
      src: "/microsoft.png",
      alt: "OpenAI"
    },
    {
      id: 3,
      src: "/spotify.png",
      alt:"Spotify"
    },
    {
      id: 4,
      src: "/netflix.png",
      alt: "Netflix"
    },
    {
      id: 5,
      src: "/image.png",
      alt: "DeepMind"
    },
    {
      id: 6,
      src: "/heroui.png",
      alt: "Heroui"
    }
  ]

export const CHIPSTYLE = "text-xs bg-zinc-900 text-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:h-1/6"