import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Technology",
  "Health",
  "Education",
  "Entertainment",
  "Lifestyle",
  "Travel",
  "Food",
  "Sports",
  "Finance",
  "Gaming",
  "Music",
  "Art",
  "Science",
  "News",
  "Fashion",
];

async function main(){
  try {
    const values = categoryNames.map((name)=>({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));
    await db.insert(categories).values(values);
    console.log("Categories seeded successfully.");
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }

}
main();