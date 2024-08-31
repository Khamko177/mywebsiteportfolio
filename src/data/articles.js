import React from "react";

function article_1() {
	return {
		date: "2020-2021",
		title: "Learn Vietnamese",
		description:
			"Laotian Student Journey",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						**Laotian Student Journey:As a Laotian student, I embarked on my educational journey in Vietnam with a 
						strong desire to pursue Information Technology. Before diving into my major, I dedicated my first yea
						 to learning Vietnamese, a crucial step that allowed me to pass the language exam and gain entry into my chosen field of study.
						 (Hành Trình Của Sinh Viên Lào:Là một sinh viên người Lào, tôi đã bắt đầu hành trình 
						 học tập của mình tại Việt Nam với mong muốn theo đuổi ngành Công nghệ Thông tin. 
						 Trước khi bắt đầu học chuyên ngành, tôi đã dành năm đầu tiên để học tiếng Việt, 
						 một bước quan trọng giúp tôi vượt qua kỳ thi tiếng Việt và vào được ngành học mà mình đã chọn.) <br/> <br/>
					    **Overcoming Language Barriers:The transition was challenging, as mastering a new language
						in just one year was no easy feat. Despite the difficulties, I persevered, understanding that
					    this was a necessary hurdle to achieve my academic and professional goals.
						(Vượt Qua Rào Cản Ngôn Ngữ:Quá trình chuyển đổi này gặp nhiều thách thức,
						 bởi việc thành thạo một ngôn ngữ mới chỉ trong một năm không phải là điều dễ dàng. 
						 Mặc dù khó khăn, tôi đã kiên trì, hiểu rằng đây là thử thách cần thiết để đạt được 
						 mục tiêu học tập và nghề nghiệp của mình.)

					</div>
					{/* <img
						src="./Vietnamses.jpg"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2021-2025",
		title: "Information Technology",
		description:
			"Academic Pursuits and Growth",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div>**Academic Pursuits and Growth:Once I began my studies in Information Technology, 
					I faced additional challenges, particularly in understanding complex technical concepts
					 taught in Vietnamese. However, these obstacles only strengthened my resolve. With 
					 determination and continuous effort, I improved my language skills while simultaneously 
					 advancing in my technical knowledge( Học Tập và Phát Triển:Khi bắt đầu học ngành Công nghệ Thông tin, 
					 tôi đã gặp phải thêm nhiều khó khăn, đặc biệt là trong việc hiểu các khái niệm kỹ thuật phức
					  tạp được giảng dạy bằng tiếng Việt. Tuy nhiên, những trở ngại này chỉ làm tăng thêm quyết
					   tâm của tôi. Với sự kiên trì và nỗ lực không ngừng, tôi đã cải thiện kỹ năng ngôn ngữ của 
					   mình đồng thời nâng cao kiến thức kỹ thuật.) <br/> <br/>

					**Dream and Motivation:My journey has been fueled by a deep-seated dream to become a Web Developer. 
					I am passionate about technology and aspire to work for an international company, where I can 
					not only apply my skills but also continue learning and growing in a professional environment.
					 My ultimate goal is to earn a higher salary to support my family, who have been my constant
					  source of motivation throughout this journey (Ước Mơ và Động Lực:Hành trình của tôi được thúc 
					  đẩy bởi ước mơ trở thành một Nhà phát triển Web. Tôi đam mê công nghệ và mong muốn được làm 
					  việc trong một công ty quốc tế, nơi tôi có thể áp dụng kỹ năng của mình và tiếp tục học hỏi, 
					  phát triển trong một môi trường chuyên nghiệp. Mục tiêu cuối cùng của tôi là có được mức
					   lương cao hơn để hỗ trợ gia đình, những người luôn là nguồn động lực không ngừng của
					    tôi trong suốt hành trình này.)

					 
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
