import Layout from "@/components/Layout";
import React from "react";
import { motion } from "framer-motion";

const Message = () => {
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="w-full overflow-hidden relative">
          <motion.div
            // initial={{ opacity: 0, scale: 0.2 }}
            // animate={{
            //   opacity: 1,
            //   scale: 1,
            // }}
            animate={{
              scale: [1, 1.11, 1.12, 1.13, 1.14, 1.13, 1.12, 1.11, 1],
              transition: { duration: 6, repeat: Infinity },
            }}
            transition={{
              duration: 1.8,
              type: "spring",
            }}
            className="w-full h-[90vh]"
          >
            <img src="/img/kalki.jpeg" className="w-full h-full" alt="" />
          </motion.div>
          <div className="absolute inset-0 left-10 top-[7rem]">
            <h2
              className="text-6xl font-bold text-yellow-400"
              style={{ textShadow: "1px 1px black" }}
            >
              Avatar <br /> and <br /> A message of God Kalki
            </h2>
          </div>
        </div>

        <div className="w-full md:container">
          <div className="px-6 py-4 flex flex-col gap-4 text-gray-700 md:w-2/3 mx-auto">
            <h2 className="text-3xl font-semibold">Avatar</h2>
            <div>
              <p>
                The Dashavatara (Sanskrit: Daśāvatāra) are the ten primary
                avatars of Vishnu, a principal Hindu god. Vishnu is said to be
                descendent in the form of an Avatar (superpower) to restore
                cosmic order .The word Dashavatara derives from daśa, meaning
                "ten",(10) and avatāra, roughly equivalent to "incarnation". It
                is mentioned in the Puranas (vedic text ancient literature) that
                God has taken nine(9) incarnations on earth so far. And now the
                tenth (10) incarnation of God is about to take place. There are
                various references in many Puranas about incarnations when,
                where & how the Avatar will take place. This tenth(10) avatar is
                Lord KALKI.
              </p>
            </div>
            <div>
              <p>
                One must understand what the first incarnation is. Avatar is a
                Sanskrit word. Incarnation is the birth of God in the form of
                humans or animals on earth. Example - Lord Rama, Lord Krishna,
                Lord Jesus Christ, Prophet Mohammad, Lord Gautama Buddha etc.
              </p>
            </div>
            <div>
              <p>
                According to the Brahmanda Purana, the Universe is the creation
                of God. Man and the earth are also created or begotten by the
                will of (superpower) almighty God. Whenever man and universe
                (earth) are in trouble, God will incarnate on earth. They will
                remove (purify) the calamities of man and the earth. Puranas
                mention that God took many incarnations for the sake of earth
                and mankind since he dwelled on earth.
              </p>
            </div>
            <div>
              <p>
                Not all incarnations of Gods are Dashavatara. Dashavatar belongs
                to Lord Vishnu. It is as follows..
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:container px-4 md:px-16 mt-12">
          <div className="w-full grid md:grid-cols-2 bg-[#f3f3fa] items-center md:h-[60vh]">
            <div className="md:w-2/3 mx-auto p-2 h-full text-center flex flex-col gap-5 justify-center">
              <h2 className="text-4xl font-bold">Matsya</h2>
              <p>
                The fish avatar. He saves Manu and the seven sages from the
                cosmic flood, and in some traditions, saves the Vedas from an
                asura called Hayagriva.
              </p>
            </div>
            <div className="w-full flex md:justify-end md:h-[60vh]">
              <img
                src="https://pbs.twimg.com/media/F04PE5FWYAAI4ow.jpg:large"
                alt=""
                className="h-full md:w-2/3 aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full px-4 md:container md:px-16 mt-10">
          <div className="w-full grid md:grid-cols-2 bg-[#f3f3fa] items-center md:h-[60vh]">
            <div className="md:w-2/3 mx-auto p-2 h-full flex text-center flex-col gap-5 justify-center order-1 md:order-2">
              <h2 className="text-4xl font-bold">Kurma</h2>
              <p>
                The tortoise/turtle avatar. He supports the mountain named
                Mandara while the devas and the asuras churn the ocean of milk
                to produce the nectar of immortality.
              </p>
            </div>
            <div className="w-full flex justify-start h-[60vh] order-2 md:order-1">
              <img
                src="https://i.pinimg.com/originals/f0/be/88/f0be88e2aca5322f61ee469a2822d9f9.jpg"
                alt=""
                className="md:h-full md:w-[75%] object-cover bg-center aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:px-16 flex px-4 md:container mt-10 md:h-[90vh]">
          <div className="w-full h-fit grid md:grid-cols-3 gap-10">
            <div className="w-full md:h-2/3 bg-[#f3f3fa] flex flex-col">
              <div className="w-full md:h-[35vh] p-8 text-center">
                <h2 className="text-4xl font-bold py-5">Varaha</h2>
                <p className="text-lg text-gray-700">
                  The boar avatar. He rescues Bhumi, the goddess of the earth,
                  when the asura Hiranyaksha abducts her, restoring her rightful
                  place in the universe.
                </p>
              </div>
              <div className="w-full h-full flex justify-end">
                <img
                  src="https://cdnb.artstation.com/p/assets/images/images/039/588/407/large/jegarupan-vathumalai-varaha-jega210702-21-complete-x-media.jpg?1626338782"
                  alt=""
                  className="md:h-2/3 w-full object-cover bg-center aspect-square md:aspect-auto"
                />
              </div>
            </div>
            <div className="w-full md:h-2/3 bg-[#f3f3fa]">
              <div className="w-full md:h-[34vh] py-4 p-8 text-center">
                <h2 className="text-4xl font-bold py-5">Narasimha</h2>
                <p className="text-lg text-gray-700">
                  The lion avatar. He saves his devotee Prahlada and frees the
                  three worlds from the tyranny of an asura named
                  Hiranyakashipu.
                </p>
              </div>
              <div className="w-full h-full">
                <img
                  src="https://static.wixstatic.com/media/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg"
                  alt=""
                  className="w-full object-cover md:h-2/3 aspect-square md:aspect-auto"
                />
              </div>
            </div>
            <div className="w-full md:h-2/3 bg-[#f3f3fa]">
              <div className="w-full md:h-[34vh] py-4 p-8 text-center">
                <h2 className="text-4xl font-bold py-5">Narasimha</h2>
                <p className="text-lg text-gray-700">
                  The lion avatar. He saves his devotee Prahlada and frees the
                  three worlds from the tyranny of an asura named
                  Hiranyakashipu.
                </p>
              </div>
              <div className="w-full h-full">
                <img
                  src="https://static.wixstatic.com/media/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg"
                  alt=""
                  className="w-full object-cover md:h-2/3 aspect-square md:aspect-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full px-4 md:container md:px-16 mt-10">
          <div className="w-full grid md:grid-cols-2 bg-[#f3f3fa] items-center h-[60vh]">
            <div className="md:w-2/3 p-2 text-center mx-auto h-full flex flex-col gap-5 justify-center">
              <h2 className="text-4xl font-bold">Vamana</h2>
              <p>
                The dwarf avatar. He vanquishes the asura king Mahabali to the
                netherworld after taking three strides upon the universe,
                restoring the rule of Indra.
              </p>
            </div>
            <div className="w-full flex justify-end md:h-[60vh]">
              <img
                src="https://pbs.twimg.com/media/F04PE5FWYAAI4ow.jpg:large"
                alt=""
                className="h-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:h-[70vh] px-4 md:container md:px-16 mt-32 md:mt-10">
          <div className="w-full grid md:grid-cols-2 bg-[#f3f3fa] items-center md:h-[60vh]">
            <div className="md:w-2/3 mx-auto h-full flex flex-col p-2 text-center gap-5 justify-center order-1 md:order-2">
              <h2 className="text-4xl font-bold">Parashurama</h2>
              <p>
                The warrior-sage avatar. He destroys the oppressive kings of the
                military class and creates a new social order.
              </p>
            </div>
            <div className="w-full flex justify-start md:h-[60vh] order-2 md:order-1">
              <img
                src="https://i.pinimg.com/originals/f0/be/88/f0be88e2aca5322f61ee469a2822d9f9.jpg"
                alt=""
                className="h-full md:w-[75%] object-cover bg-cover aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:px-16 flex md:container px-4 mt-10 md:mt-0">
          <div className="w-full h-full grid md:grid-cols-3 gap-10">
            <div className="w-full h-full bg-[#f3f3fa]">
              <div className="w-full md:h-[34vh] py-4 p-8 text-center">
                <h2 className="text-4xl font-bold py-5">Narasimha</h2>
                <p className="text-lg text-gray-700">
                  The lion avatar. He saves his devotee Prahlada and frees the
                  three worlds from the tyranny of an asura named
                  Hiranyakashipu.
                </p>
              </div>
              <div className="w-full">
                <img
                  src="https://static.wixstatic.com/media/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full h-full bg-[#f3f3fa]">
              <div className="w-full md:h-[34vh] py-4 p-8 text-center">
                <h2 className="text-4xl font-bold py-5">Narasimha</h2>
                <p className="text-lg text-gray-700">
                  The lion avatar. He saves his devotee Prahlada and frees the
                  three worlds from the tyranny of an asura named
                  Hiranyakashipu.
                </p>
              </div>
              <div className="w-full">
                <img
                  src="https://static.wixstatic.com/media/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full h-full bg-[#f3f3fa]">
              <div className="w-full md:h-[34vh] py-4 p-8 text-center">
                <h2 className="text-4xl font-bold py-5">Narasimha</h2>
                <p className="text-lg text-gray-700">
                  The lion avatar. He saves his devotee Prahlada and frees the
                  three worlds from the tyranny of an asura named
                  Hiranyakashipu.
                </p>
              </div>
              <div className="w-full">
                <img
                  src="https://static.wixstatic.com/media/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caa79a_bbaff16b495243f286f06152b376fd62~mv2.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
          <div className="md:w-1/2 mx-auto shadow-2xl p-5">
            <div className="flex gap-2 items-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:295/1*Ru48Y9b_JRjbaI0N0Sf0-w.png"
                className="h-14 w-14 rounded-full"
                alt=""
              />
              <h2 className="text-xl font-bold">Maharishi Ved Vyas</h2>
            </div>
            <div className="w-full mt-4 md:pl-12">
              <p>
                <span className="text-gray-600 font-bold text-3xl">P</span>
                uranas mention that God took many avatars in different forms in
                different places in Hinduism. Many of these avatars are of Lord
                Vishnu. Lord Vishnu incarnated for the salvation of human life
                and destruction of evil. Traditional Hindus do not see
                themselves as "Hindu", but rather as Vaishnavas (Worshippers of
                Vishnu), Shaivas (Worshippers of Shiva) or Shaktas (Worshippers
                of Shakti). Each incarnation of God has something to do, and
                each of those incarnations has a story. Now the tenth
                incarnation of Lord Vishnu is Lord KALKI.​​
              </p>
              <p>
                <span className="text-gray-600 font-bold text-3xl">C</span>
                hiranjivi is term which refers to immortal beings in Hinduism.
                They are supposed to help Kalki- the last Avatar of Vishnu,
                which will take Kal Yug back to Sat Yug. It was believed that in
                Kaliyuga Human appearance of God will not find any teacher
                capable to guide and teach him. So Chiranjeevi's were left/made.
                Seven Ciranjivis - Lord Humana, Kripacharya, Mahabali,
                Aswathama, Lord Parashurama, Vibhishana, Maharishi Ved Vyas.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
          <div className="grid grid-cols-2 px-16 py-3">
            <div className="flex w-full flex-col gap-4">
              <div>
                <p>
                  यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। <br />{" "}
                  अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥1॥ <br /> परित्राणाय
                  साधूनां विनाशाय च दुष्कृताम् । <br /> धर्मसंस्थापनार्थाय
                  सम्भवामि युगे युगे ॥2॥
                </p>
              </div>
              <div>
                Yada Yada Hi Dharmasya Glanirbhavati Bharat. <br />
                Abhyutthanamdharmasya tadatmanam srujamyham ॥1॥ <br />
                Paritranaya sadhunan vinasaya cha duskritam. <br />
                Dharma samsthapanarthaya sambhavami yuge yuge ॥2॥
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div>
                <h2>The possible eras for the establishment of religion.</h2>
                <p>
                  When Arjuna refused to fight in Kurukshetra. This verse is one
                  of the most prominent and famous verses of the Hindu scripture
                  Gita.This verse is 7 and 8 of chapter 4 of Gita. This verse is
                  described by Lord Krishna in Mahabharata.
                </p>
              </div>
              <div>
                <h2>Meaning:</h2>
                <p>
                  I am manifest, I appear, when religiously harmed, ever more,
                  when lawlessness increases,then present ,to protect the good
                  people, to destroy the ill-wickeds for the establishment of
                  religion, and disaster to human beings.
                </p>
                <h2 className="mt-4 float-end">
                  lord Krishna, Hindu religious text (Prolegomena) Mahabharata
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Message;
