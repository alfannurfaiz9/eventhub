export const categories = [
  {
    id: 1,
    name: "Technology",
    style: "py-1 px-2 text-blue bg-light-blue rounded-full",
  },
  {
    id: 2,
    name: "Design",
    style: "py-1 px-2 text-purple bg-light-purple rounded-full",
  },
  {
    id: 3,
    name: "Business",
    style: "py-1 px-2 text-primary bg-light-primary rounded-full",
  },
  {
    id: 4,
    name: "Career",
    style: "py-1 px-2 text-primary bg-light-primary rounded-full",
  },
  {
    id: 5,
    name: "AI",
    style: "py-1 px-2 text-blue bg-light-blue rounded-full",
  },
  {
    id: 6,
    name: "Programming",
    style: "py-1 px-2 text-green bg-light-green rounded-full",
  },
  {
    id: 7,
    name: "Music",
    style: "py-1 px-2 text-blue bg-light-blue rounded-full",
  },
];

export const communities = [
  {
    id: 1,
    name: "Bandung Go Community",
    img: "/communities-1.jpg",
    desc: "The premier Go programming community in Bandung — weekly meetups, workshops, and mentoring for Gophers at all levels.",
    categories: [1, 6],
    member: 847,
    upcoming_event: 3,
  },
  {
    id: 2,
    name: "Jakarta AI & ML Club",
    img: "/communities-2.jpg",
    desc: "Researchers, practitioners, and enthusiasts exploring machine learning, LLMs, and the future of AI in Indonesia.",
    categories: [5, 1],
    member: 2341,
    upcoming_event: 5,
  },
  {
    id: 3,
    name: "Indonesia Frontend Devs",
    img: "/communities-3.jpg",
    desc: "The largest frontend community in Indonesia. React, Vue, Svelte, performance, accessibility — all things frontend.",
    categories: [1, 6],
    member: 5621,
    upcoming_event: 4,
  },
  {
    id: 4,
    name: "Product Minds Indonesia",
    img: "/communities-4.jpg",
    desc: "Product managers, designers, and builders sharing frameworks, tools, and career journeys.",
    categories: [3, 4],
    member: 1203,
    upcoming_event: 2,
  },
  {
    id: 5,
    name: "Creative Coders Collective",
    img: "/communities-5.jpg",
    desc: "Design and code intersect here — generative art, design systems, creative development, and beautiful UI.",
    categories: [2, 6],
    member: 934,
    upcoming_event: 2,
  },
  {
    id: 6,
    name: "Startup Founders Circle",
    img: "",
    desc: "Early-stage founders in Indonesia supporting each other through fundraising, product, and growth challenges.",
    categories: [3],
    member: 789,
    upcoming_event: 3,
  },
  {
    id: 7,
    name: "Data Science ID",
    img: "/communities-7.jpg",
    desc: "Data scientists and analysts across Indonesia — sharing datasets, papers, and practical ML projects.",
    categories: [5, 6],
    member: 1567,
    upcoming_event: 2,
  },
  {
    id: 8,
    name: "Music Tech Community",
    img: "/communities-8.jpg",
    desc: "Producers, sound engineers, and musicians who love blending technology with music creation.",
    categories: [7],
    member: 445,
    upcoming_event: 1,
  },
];

export const events = [
  {
    id: 1,
    community_id: 1,
    categories: ["Technology"],
    title: "Go Concurrency Workshop",
    desc: "A deep-dive workshop into Go concurrency patterns — goroutines, channels, select statements, and real-world use cases. Suitable for intermediate Go developers ready to write production-grade concurrent code. We'll cover common pitfalls, race conditions, and how to use the sync package effectively. Bring your laptop and be ready to write a lot of code.",
    sub_desc:
      "We'll build three mini-projects throughout the day: a rate limiter, a worker pool, and a concurrent web scraper.",
    img: "/event-1.jpg",
    date: "Aug 22, 2026",
    time: "09:00 WIB",
    location: "Bandung",
    attendees: 48,
    capacity: 100,
    style: function () {
      return `absolute left-0 top-0 rounded-full bg-green h-full w-[${(this.attendees / this.capacity) * 100}%]`;
    },
  },
  {
    id: 2,
    community_id: 2,
    title: "AI Product Design Summit",
    desc: "A deep-dive workshop into Go concurrency patterns — goroutines, channels, select statements, and real-world use cases. Suitable for intermediate Go developers ready to write production-grade concurrent code. We'll cover common pitfalls, race conditions, and how to use the sync package effectively. Bring your laptop and be ready to write a lot of code.",
    sub_desc:
      "We'll build three mini-projects throughout the day: a rate limiter, a worker pool, and a concurrent web scraper.",
    img: "/event-2.jpg",
    date: "Sep 5, 2026 ",
    time: "08:30 WIB",
    location: "Jakarta",
    attendees: 234,
    capacity: 300,
    style: function () {
      return `absolute left-0 top-0 rounded-full bg-green h-full w-[${(this.attendees / this.capacity) * 100}%]`;
    },
  },
  {
    id: 3,
    community_id: 3,
    title: "Frontend Craft Conference",
    desc: "A deep-dive workshop into Go concurrency patterns — goroutines, channels, select statements, and real-world use cases. Suitable for intermediate Go developers ready to write production-grade concurrent code. We'll cover common pitfalls, race conditions, and how to use the sync package effectively. Bring your laptop and be ready to write a lot of code.",
    sub_desc:
      "We'll build three mini-projects throughout the day: a rate limiter, a worker pool, and a concurrent web scraper.",
    img: "/event-3.jpg",
    date: "Oct 12, 2026",
    time: "09:00 WIB",
    location: "Bandung",
    attendees: 167,
    capacity: 200,
    style: function () {
      return `absolute left-0 top-0 rounded-full bg-green h-full w-[${(this.attendees / this.capacity) * 100}%]`;
    },
  },
  {
    id: 4,
    community_id: 4,
    title: "Product Management Masterclass",
    desc: "A deep-dive workshop into Go concurrency patterns — goroutines, channels, select statements, and real-world use cases. Suitable for intermediate Go developers ready to write production-grade concurrent code. We'll cover common pitfalls, race conditions, and how to use the sync package effectively. Bring your laptop and be ready to write a lot of code.",
    sub_desc:
      "We'll build three mini-projects throughout the day: a rate limiter, a worker pool, and a concurrent web scraper.",
    img: "/event-4.jpg",
    date: "Sep 18, 2026",
    time: "10:00 WIB",
    location: "Online Event",
    attendees: 89,
    capacity: 150,
    style: function () {
      return `absolute left-0 top-0 rounded-full bg-green h-full w-[${(this.attendees / this.capacity) * 100}%]`;
    },
  },
  {
    id: 5,
    community_id: 8,
    title: "Music Production Bootcamp",
    desc: "A deep-dive workshop into Go concurrency patterns — goroutines, channels, select statements, and real-world use cases. Suitable for intermediate Go developers ready to write production-grade concurrent code. We'll cover common pitfalls, race conditions, and how to use the sync package effectively. Bring your laptop and be ready to write a lot of code.",
    sub_desc:
      "We'll build three mini-projects throughout the day: a rate limiter, a worker pool, and a concurrent web scraper.",
    img: "/event-5.jpg",
    date: "Nov 3, 2026",
    time: "13:00 WIB",
    location: "Surabaya",
    attendees: 45,
    capacity: 60,
    style: function () {
      return `absolute left-0 top-0 rounded-full bg-green h-full w-[${(this.attendees / this.capacity) * 100}%]`;
    },
  },
  {
    id: 6,
    community_id: 6,
    title: "Startup Pitch Night",
    desc: "A deep-dive workshop into Go concurrency patterns — goroutines, channels, select statements, and real-world use cases. Suitable for intermediate Go developers ready to write production-grade concurrent code. We'll cover common pitfalls, race conditions, and how to use the sync package effectively. Bring your laptop and be ready to write a lot of code.",
    sub_desc:
      "We'll build three mini-projects throughout the day: a rate limiter, a worker pool, and a concurrent web scraper.",
    img: "",
    date: "Sep 28, 2026",
    time: "18:30 WIB",
    location: "Jakarta",
    attendees: 120,
    capacity: 120,
    style: function () {
      return `absolute left-0 top-0 rounded-full bg-green h-full w-[${(this.attendees / this.capacity) * 100}%]`;
    },
  },
];

export const reviews = [
  {
    id: 1,
    name: "Raisa Nurdiana",
    role: "Frontend Engineer · Cakrawala Digital",
    desc: "EventHub completely changed how I network. I met my current co-founder at a Jakarta AI meetup I found here. The community pages make it so easy to find people who are into the same things.",
  },
  {
    id: 2,
    name: "Bimo Hartanto",
    role: "Product Manager · Nusantara Labs",
    desc: "We used to manage event registrations over WhatsApp groups. Switching to EventHub as our organizer platform cut our admin overhead in half and attendance actually went up.",
  },
  {
    id: 3,
    name: "Indira Kusuma",
    role: "UX Designer · Aruna Kreasi Studio",
    desc: "I love that I can filter by city and category in one place. Found a design sprint workshop in Bandung I never would have discovered otherwise — ended up being one of the best events I've attended.",
  },
];

export const speakers = [
  {
    id: 1,
    name: "Ahmad Fauzan",
    role: "Staff Engineer, Tokopedia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdK0FEl60vuvLeMRstoANiKpcp1QuGc-YbGcnbdFiTBQ&s",
  },
  {
    id: 2,
    name: "Dina Rahayu",
    role: "Backend Lead, Traveloka",
    img: "https://mockmind-api.uifaces.co/content/human/219.jpg",
  },
];

export const members = [
  {
    id: 1,
    name: "Ahmad Fauzan",
    role: "Staff Engineer",
    img: "https://infopmb.itpln.ac.id/wp-content/uploads/2017/10/user9.jpg",
  },
  {
    id: 2,
    name: "Dina Rahayu",
    role: "Backend Lead",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGfmmtap9UGSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668447329811?e=2147483647&v=beta&t=0KlNkR86z7JOy1hLVPWrASGpK72NTRUy26PAxBsZ-QY",
  },
  {
    id: 3,
    name: "Rizky Pratama",
    role: "Engineering Manager",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNimuJo4I5UsisjQEp60syLdIPd9eG3ClCl5QFBOxi5XzVvNVaBBEAe8Sm&s=10",
  },
  {
    id: 4,
    name: "Sinta Dewi",
    role: "Senior Frontend Engineer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMSHWOi0zVkRyJ7BJkq1XsZpWQ-_3Y5oZJDer-Q7amHWxkrInY78-2TU&s=10",
  },
  {
    id: 5,
    name: "Hendra Wijaya",
    role: "DX Lead",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzYBVHbZNoybtLVPJeuGFIn5k9Tiic3bj3KqBZ1EDK4yQp8T1Icu2im4&s=10",
  },
  {
    id: 6,
    name: "Anisa Putri",
    role: "Senior PM",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC2BlGWABukEhIqm0GfQXY7Gm9YkLdT6N5x_tIFT_XDm8QKo6NcOgI9O1&s=10",
  },
];

export const discussions = [
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGfmmtap9UGSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668447329811?e=2147483647&v=beta&t=0KlNkR86z7JOy1hLVPWrASGpK72NTRUy26PAxBsZ-QY",
    name: "Dian Purnama",
    desc: "Super excited for this one — will there be any live coding exercises?",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUuT86bw8TaDh6GHMVvUoFwcaIbqiupu_XTiCMrPQK8Zmqda6iCdvnG4&s=10",
    name: "Ahmad Fauzan",
    desc: "Yes! The afternoon session is entirely hands-on. Bring your laptop with Go 1.22+ installed.",
  },
  {
    id: 3,
    img: "https://mockmind-api.uifaces.co/content/human/220.jpg",
    name: "Siti Rahayu",
    desc: "Is there parking nearby? Coming from outside Bandung.",
  },
];
