import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BirthdayGreeting() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-4 relative">
      <audio autoPlay loop>
        <source src="/Audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <Card className="max-w-xl w-full text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 z-10">
        <CardContent>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-pink-700 mb-4"
          >
            🎉🥳 Happy Anniversary Mama & Baba 🎂🤩🥰 
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className="relative w-[200px] h-[250px]">
              <Image
                src="/swati.jpg"
                alt="Swati's Birthday Photo"
                fill
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-700 mb-6"
          >
            You both are my inspiration, my heroes. With my Mama and Baba by my side, I have everything I need to conquer the world. My Mama and Baba are not just my parents; they are my best friends and confidants. The love between a child and their parents is unbreakable 💓💗. Love you so much Mama and Baba 😘😘. You Both are always stay happy and keep smile. 🥳🥳🥰🥰😍😍
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Button className="text-white bg-pink-500 hover:bg-pink-600">
              <Sparkles className="mr-2" /> Make a Wish ✨
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </main>
  );
}
