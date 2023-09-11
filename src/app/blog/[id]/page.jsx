import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';

const BlogPost = () => {
    return (
        <div className={styles.mainprofileContainer}>
            <div className={styles.sContainer}>
                <div className={styles.left}>
                    <h1 className={styles.profileTitel}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora!</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem fuga at ipsam asperiores vel placeat. Amet, illum recusandae tempore voluptas deleniti ratione rem distinctio cumque aperiam nisi dignissimos porro.</p>
                    <div className={styles.profile}>
                        <div className={styles.profileImg}>
                            <Image className={styles.profileItem} src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" fill={true} alt='photos'></Image>
                        </div>
                        <p>John Doe</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <Image className={styles.imgPro} src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600" fill={true} alt='photos'></Image>
                </div>
            </div>
            <div className={styles.onlyText}>
                <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero et saepe necessitatibus voluptate id, hic doloremque facere qui amet est quo ea enim labore repudiandae nobis quis laborum sequi dignissimos quibusdam atque aliquid fugiat quam. Vero tene perferendis in inventore sapiente quod eos, provident eligendi, consectetur dolor aliquid ea atque doloremque eaque ex illo explicabo sed velit omnis dolorem architecto voluptate libero. Explicabo repudiandae mollitia quasi, odio accusantium voluptate perferendis cupiditate similique enim magnam ratione ipsum quibusdam quo eum doloribus tenetur? Totam magnam vel labore suscipit facere id dolore quam maxime vero dicta hic nesciunt exercitationem, harum quis assumenda ratione minus deleniti beatae optio? Blanditiis nisi non, reprehenderit ducimus aliquam vitae perferendis ad at corrupti dolore illo enim numquam amet voluptates dolorum facere.</p>
                <p>tur illum veritatis vitae perferendis eligendi, quis eveniet neque. Ipsam animi ab incidunt ipsa non inventore corporis exercitationem eaque, in voluptate debitis repellat assumenda corrupti ex vitae dignissimos maiores ut autem cumque ullam expedita dolore? Fugiat, eveniet dignissimos. Culpa, nam. Obcaecati doloremque accusamus numquam necessitatibus harum, facilis sequi pariatur dolores nisi ducimus magni tempore dicta neque quisquam excepturi quasi libero rerum incidunt deleniti vel error sit sed, molestiae eos! Natus eaque blanditiis molestiae quidem perspiciatis. Nesciunt consequuntur et</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit et beatae suscipit repellendus quasi eaque! Reprehenderit placeat aliquam a tempore autem quibusdam omnis! Minus deleniti rerum, facilis aut explicabo libero est, officiis deserunt ratione dolore tempore reiciendis quas dignissimos ullam ipsam delectus blanditiis odio placeat perspiciatis. Eos aliquam dolor harum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga placeat quasi laboriosam voluptate beatae nobis dolor aperiam eligendi, suscipit veniam amet, minima odit? Maiores commodi provident esse tempora at? Unde dolor reprehenderit praesentium ducimus soluta libero quo, dicta placeat similique fuga. Beatae numquam quod alias, fugiat perferendis quae dolore voluptate minus amet illo mollitia at inventore explicabo cupiditate neque maiores eius optio quos, rem ut quo aperiam! Doloribus aperiam quod veniam fugiat assumenda, debitis omnis, placeat sint nostrum dolores, dignissimos cupiditate labore sed iure! Possimus ipsa labore incidunt, debitis ea obcaecati a corporis laudantium eveniet ullam illum modi numquam soluta facere neque animi saepe architecto delectus optio, at natus, voluptatem sed? Voluptate exercitationem reiciendis, sed perspiciatis, explicabo fuga itaque inventore eos tempore dolorem, minima omnis. Enim rem similique fugit quae sit obcaecati, dolorem distinctio laboriosam, ut corrupti repellendus ea, sunt dolorum! Hic tempora soluta dicta dolore vitae eum totam natus nobis? Beatae fugiat aliquam optio, pariatur voluptate porro quis accusamus obcaecati ipsum ea non? Magni accusamus tempore voluptatum provident neque aliquam optio incidunt quos aut illo, placeat aperiam, officiis repudiandae asperiores, cupiditate ipsa perferendis unde in dolor debitis expedita explicabo voluptas! Asperiores natus officia cupiditate. Illum, beatae commodi sed dicta odit explicabo praesentium laborum laboriosam. Laboriosam quaerat deleniti eum repudiandae, ea dolores libero ipsum esse nemo? Error, atque itaque vel perferendis iusto alias illum laborum obcaecati ducimus dicta eaque voluptas repellat excepturi impedit suscipit esse tempora dolorum. Amet repellendus rem et vero voluptate, suscipit magnam iusto atque id nemo, harum dolorem consequatur expedita quos, soluta nulla ullam accusantium aliquid eveniet facilis? Quidem cupiditate delectus libero, eveniet ipsa sit nobis ipsum commodi nostrum minima inventore itaque eaque nulla quisquam a beatae unde debitis ducimus incidunt reiciendis dicta, eius, voluptatibus magni? Ex ratione dolorum officia qui veniam repellat ducimus nihil adipisci omnis ea, facere asperiores vitae aut delectus ut dolore blanditiis a rerum amet aperiam. Necessitatibus exercitationem quasi iusto laboriosam corporis sequi laudantium aperiam non possimus officiis vel corrupti dolor aliquam assumenda eligendi, dolore quos nihil soluta adipisci enim odit eveniet, inventore molestiae! Nisi sunt, dolore minus laborum nihil distinctio. Minima saepe, possimus nesciunt tempora consectetur eos accusamus officia totam libero adipisci architecto voluptatibus, iure facilis velit inventore sint blanditiis quisquam vero omnis eveniet! Earum a totam ipsum quas adipisci ipsa, tenetur nisi eius quasi dolor optio voluptates repudiandae magni! Quasi ab, consequatur non obcaecati beatae dolorum possimus similique enim quibusdam!</p>
            </div>
        </div>
    );
};

export default BlogPost;