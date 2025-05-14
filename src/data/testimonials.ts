
export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  title: string;
  quote: string;
  variant: 'bg-Purple-500' | 'bg-White' | 'bg-Grey-500' | 'bg-Dark-blue';
  textcolor: "text-White" | "text-Grey-400";
  span: string;
}

export const testimonials: Testimonial[] = [
  {
    avatar: "/testimonialcards/images/image-daniel.jpg",
    name: 'Daniel Clifford',
    role: 'Verified Graduate',
    title:
      'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    quote: `I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best – and most grueling – time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.`,
    variant: 'bg-Purple-500',
    textcolor:"text-White",
    span: "md:bg-[url(/testimonialcards/images/bg-pattern-quotation.svg)] md:bg-no-repeat bg-position-[right_4rem_top] sm:col-start-1 sm:row-span-2 md:col-start-1 md:col-span-2 md:row-span-1"
    
  },
  {
    avatar: "/testimonialcards/images/image-jonathan.jpg",
    name: 'Jonathan Walters',
    role: 'Verified Graduate',
    title: 'The team was very supportive and kept me motivated',
    quote: `I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.`,
    variant: "bg-Grey-500",
		textcolor:"text-White",
    span: "sm:col-start-2 md:col-start-3 md:row-start-1",
    
  },
  {
    avatar: "/testimonialcards/images/image-jeanette.jpg",
    name: 'Jeanette Harmon',
    role: 'Verified Graduate',
    title: 'An overall wonderful and rewarding experience',
    quote: `Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.`,
    variant:"bg-White",
		textcolor:"text-Grey-400",
    span: "  sm:row-start-2 sm:col-start-2 md:row-start-2 md:col-start-1"
  
  },
  {
    avatar: "/testimonialcards/images/image-patrick.jpg",
    name: 'Patrick Abrams',
    role: 'Verified Graduate',
    title:
      'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
    quote: `The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.`,
    variant: "bg-Dark-blue",
		textcolor:"text-White",
    span: " sm:col-start-3 sm:row-span-2 md:row-start-2 md:col-start-2 md:col-span-2 md:row-span-1"
  },
  {
    avatar: "/testimonialcards/images/image-kira.jpg",
    name: 'Kira Whittle',
    role: 'Verified Graduate',
    title: 'Such a life-changing experience. Highly recommended!',
    quote: `Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!`,
    variant:"bg-White",
		textcolor:"text-Grey-400",
    span:"sm:row-start-3 sm:col-span-3 md:col-start-4 md:row-span-2"
    
  },
];
