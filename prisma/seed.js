const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'alicemartin' },
            { username: 'alicemartin' }
        ]
    });

    console.log(`${createdUsers.count} users created`, createdUsers);


    const createdProfile = await prisma.profile.createMany({
        data: [
          {
            bio: "yippie",
            userId: 1,
            profilePictureUrl:
              "https://i1.sndcdn.com/artworks-PieTlGgGSzqoJlch-KqKozQ-t500x500.jpg",
          },
          {
            bio: "yippie",
            userId: 1,
            profilePictureUrl:
              "https://i1.sndcdn.com/artworks-PieTlGgGSzqoJlch-KqKozQ-t500x500.jpg",
          },
          {
            bio: "yippie",
            userId: 1,
            profilePictureUrl:
              "https://i1.sndcdn.com/artworks-PieTlGgGSzqoJlch-KqKozQ-t500x500.jpg",
          },
        ],
      });
    
      console.log(`${createdProfile.count} profiles created`, createdProfile);
    
      const createdPost = await prisma.post.createMany({
        data: [
          {
            title: "having fun",
            content: "yayayayya",
            authorId: 1,
          },
          {
            title: "working",
            content: "coding is hard",
            authorId: 2,
          },
          {
            title: "yumm",
            content: "eating",
            authorId: 1,
          },
          {
            title: "playing games",
            content: "my favourite game",
            authorId: 2,
          },
          {
            title: "still hungry",
            content: "what to eat",
            authorId: 1,
          },
          {
            title: "cats",
            content: "i love cats",
            authorId: 3,
          },
        ],
      });
    
      console.log(`${createdPost.count} posts created`, createdPost);
    
      const createdComment = await prisma.comment.createMany({
        data: [
          {
            text: "also having fun",
            postId: 1,
            authorId: 2,
          },
          {
            text: "very difficult",
            postId: 2,
            authorId: 3,
          },
          {
            text: "wow",
            postId: 3,
            authorId: 2,
          },
        ],
      });
    
      console.log(`${createdComment.count} posts created`, createdComment);
      // Don't edit any of the code below this line
      process.exit(0);
    }
    
    seed().catch(async (error) => {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    });


    // Don't edit any of the code below this line
    process.exit(0);


seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })