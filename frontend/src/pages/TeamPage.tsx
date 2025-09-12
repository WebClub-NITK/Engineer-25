"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function ParallaxScrollDemo() {
  return <ParallaxScroll members={members} />;
}

const members = 
[
  { "image": "/images/member_icon.png", "name": "Shreesha M B", "position": "Convenor" },
  { "image": "/images/member_icon.png", "name": "Pranav Simha N", "position": "Chief Organizer" },
  { "image": "/images/member_icon.png", "name": "Waseem", "position": "Co-convenor" },
  { "image": "/images/member_icon.png", "name": "Pavan G", "position": "Event Production Lead" },
  { "image": "/images/member_icon.png", "name": "Likith Raj", "position": "Event Production Lead" },
  { "image": "/images/member_icon.png", "name": "Kushal M K", "position": "Head of Hospitality" },
  { "image": "/images/member_icon.png", "name": "Harshavardhan", "position": "Marketing Head" },
  { "image": "/images/member_icon.png", "name": "Dhanush", "position": "Marketing Head" },
  { "image": "/images/member_icon.png", "name": "Sujith Setlem", "position": "Media Lead" },
  { "image": "/images/member_icon.png", "name": "Karthik", "position": "Media Lead" },
  { "image": "/images/member_icon.png", "name": "Thushar", "position": "Media Lead" },
  { "image": "/images/member_icon.png", "name": "Saavanth", "position": "Publicity" },
  { "image": "/images/member_icon.png", "name": "Jayavamsi", "position": "Publicity" },
  { "image": "/images/member_icon.png", "name": "Yuvraj", "position": "Operations" },
  { "image": "/images/member_icon.png", "name": "Anoop", "position": "Creative" },
  { "image": "/images/member_icon.png", "name": "Nisarga", "position": "Creative" },
  { "image": "/images/member_icon.png", "name": "Sahana", "position": "Creative" },
  { "image": "/images/member_icon.png", "name": "Ankith", "position": "Engi Office" },
  { "image": "/images/member_icon.png", "name": "Likith Gowda", "position": "Treasurer" },
  { "image": "/images/member_icon.png", "name": "Niranjan MK", "position": "Tech Head" },
  { "image": "/images/member_icon.png", "name": "Shrisharva", "position": "Engi Connect" },
  { "image": "/images/member_icon.png", "name": "Yash", "position": "Engi Games" }
];
