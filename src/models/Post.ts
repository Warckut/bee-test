export interface PostModel {
  heading: string;
  lastComment: {
    author: {
      firstName: string;
      lastName: string;
    };
    time: string;
    text: string;
  };
  viewed: number;
  commented: number;
}

export const posts: PostModel[] = [
  {
    heading: "Himalayan sunset",
    lastComment: {
      author: {
        firstName: "Jason",
        lastName: "Anderson",
      },
      time: "19:39 am",
      text: `Don't sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.`,
    },
    viewed: 123,
    commented: 321,
  },
  {
    heading: "Sunset sunset sunset",
    lastComment: {
      author: {
        firstName: "Jason",
        lastName: "Anderson",
      },
      time: "19:39 am",
      text: `Don't sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.`,
    },
    viewed: 123,
    commented: 321,
  },
  {
    heading: "Morning of Siberia",
    lastComment: {
      author: {
        firstName: "Jason",
        lastName: "Anderson",
      },
      time: "19:39 am",
      text: `Don't sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.`,
    },
    viewed: 123,
    commented: 321,
  },
];
