import Layout from "@/components/Layout";
import React from "react";
import { motion } from "framer-motion";

const Adinath = () => {
  return (
    <Layout>
      <div className="w-full">
        <motion.div className="w-full h-[70vh]">
          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            src="/img/adinath.webp"
            className="w-full h-full overflow-hidden object-cover bg-cover"
            alt=""
          />
        </motion.div>
        <div className="flex flex-col gap-8 my-8">
          <motion.div
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{
            //   duration: 1,
            // }}
            className="w-full my-5 overflow-hidden"
          >
            <div className="grid w-full md:grid-cols-12 md:gap-10">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="left w-full h-fit md:col-span-4"
              >
                <div className="py-6 pl-2 w-full mx-auto border-l-[2px] border-[#4b4e53]">
                  <h2 className="text-xl text-[#4b4e53] font-bold flex items-center justify-center mx-auto">
                    God Adinath Shivshankar
                  </h2>
                </div>
                <img
                  src="/img/shiv.jpg"
                  className="md:w-2/3 h-[50vh] object-cover w-full md:mx-auto mt-6"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="right w-full flex items-center flex-col justify-center md:gap-4 py-3 px-3 text-justify bg-[#eeeeee] md:col-span-8"
              >
                <p>
                  The First Nath, known as Iva (Shiva), as one of the first Nine
                  Naths. The majority of the Natha Sampraday has always been
                  there as , but in recent decades, this component of their
                  identity has received more attention. One of the fundamental
                  deities in Hinduism is Shiva (iva, meaning "The Auspicious
                  One"), also known as Mahadeva (or "Great God"). He belongs to
                  the ADINATH, one of the three most important religions of
                  Hinduism in modern times. He is one of the five manifestations
                  of God known as "the Transformer" or "a Destroyer" in the
                  trimurti, the Hindu Trinity that represents the fundamental
                  elements of the divine faith. Shiva is viewed as being
                  infinite, transcendent, unchanging, and formless because he is
                  the supreme deity. Shiva can take both scary and kind forms
                  toward humanity.He is portrayed in beneficent aspects as an
                  omniscient yogi who leads an ascetic existence on Kailash.
                  (Kailash Mount)
                </p>
                <p>
                  Gorakhnāth nowadays is often identified with Śhiva,
                  supplanting Aadinath. The traditional Aiva rudraksh seed
                  necklaces and tripura ash are not supported by the mediaeval
                  miniatures, and the ritual forehead marks used a different
                  alchemy of saffron etc.That is used with Today,Shiva is
                  frequently used to refer to Gorakhnath, replacing "OM SHIV
                  GORKSHANATH," a prominent Hindu Nath mantra”.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{
            //   duration: 1,
            // }}
            className="w-full my-5 overflow-hidden"
          >
            <div className="grid w-full md:grid-cols-12 md:gap-10">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="left md:col-span-4 h-fit order-1 w-full md:order-2"
              >
                <div className="py-6 pl-2 w-fit mx-auto border-l-[2px] border-[#4b4e53]">
                  <h2 className="text-xl text-[#4b4e53] font-bold flex items-center justify-center mx-auto">
                    Guru Gorakshanath
                  </h2>
                </div>
                <img
                  src="https://i.pinimg.com/736x/82/29/dc/8229dc1078bb53becbc567d3da5cd328.jpg"
                  className="md:w-2/3 h-[50vh] bg-cover object-cover mx-auto mt-6"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="right w-full flex items-center flex-col order-1 justify-center md:gap-4 py-5 md:py-0 px-3 text-justify bg-[#eeeeee] md:col-span-8"
              >
                <p>
                  There are twelve Panths, or streams, within the Nath
                  Sampradaya. These panths were a conglomeration of distinct
                  organisations descending from either Matsyendranath,
                  Gorakshanath, or one of their pupils rather than a division of
                  a single monolithic order. There have always been a lot more
                  Natha sects than can easily fit into the twelve official
                  panths, They congregate in specific locations on a regular
                  basis, especially during festivals like Navratri, Maha
                  Shivaratri, and Kumbh Mela. Living in caves, Nath yogis
                  practised yoga and lived their ideals. The Nath yogi, with the
                  exception of a handful, decided to leave the village.
                </p>
                <p>
                  As the Sadhus (celibate monks) and other married householders
                  (family) lay people make up one of the two branches of the
                  Nath tradition.The resembling an endogamous caste and are far
                  more numerous than monks. In both Nepal and India, Nath sadhus
                  and (family) householders can be found, but they are more
                  prevalent in some Indian states.The Barah(12) Panthi Yogi,
                  founded by the ascetics, some holy towns. Along with a much
                  larger householder (family) Nath tradition, the Nath ascetic
                  order has many ascetics (mainly men) who are dispersed in
                  numerous monasteries throughout India, primarily in the North
                  and West. The oldest Nath monastery still in operation is in
                  the Karnataka region, close to Mangalore. Shaiva iconography
                  and three 10th-century Buddhist bronze sculptures are both
                  kept in the monastery.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{
            //   duration: 1,
            // }}
            className="w-full my-5 overflow-hidden"
          >
            <div className="grid md:grid-cols-12 md:gap-10">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="left h-fit md:col-span-4"
              >
                <div className="py-6 pl-2 w-fit mx-auto border-l-[2px] border-[#4b4e53]">
                  <h2 className="text-xl text-[#4b4e53] font-bold flex items-center justify-center mx-auto">
                    Nath Monks
                  </h2>
                </div>
                <img
                  src="https://images.nightcafe.studio/jobs/0wKm2nsRg4AJiw1vmgYZ/0wKm2nsRg4AJiw1vmgYZ--1--dchvr.jpg?tr=w-1600,c-at_max"
                  className="md:w-2/3 w-full h-2/3 md:h-full mx-auto mt-6"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="right w-full flex items-center flex-col justify-center gap-4 py-5 px-3 text-justify bg-[#eeeeee] md:col-span-8"
              >
                <p>
                  The monks were distinguished by the fact that the majority of
                  them were nomads. never remaining in one spot for an extended
                  period of time; moving between monasteries. Many people formed
                  a floating community of wanderers where they shared thoughts,
                  attended festivals together, and developed a sense of identity
                  and divinity.Many people who were seeking spiritual
                  enlightenment travelled across India over very great distances
                  walked for several months, stopping at various holy places and
                  monasteries.
                </p>
                <p>
                  The only clothing the Nath monks wore was loincloths and
                  dhotis. Additionally, they frequently knotted their hair up in
                  dreadlocks, covered themselves in ashes or Bhasm, and kept a
                  sacred fire known as Dhuni. The application of Bhasma or Ash
                  for these ritual treatments, as well as coating the body with
                  it, was uncommon among (family). Both Nath monks and commoners
                  wear a woollen thread around their necks that is embellished
                  with a little horn (Shankh), a Rudraksha bead, and It's known
                  as Janeu. The little horn (Shankh), which is blown at
                  particular festivals and rituals and then followed by food
                  consumption, is significant to their religious practices.
                  Numerous Nath monks and a few common people also sport
                  prominent wearing of Kundal earrings.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Adinath;
