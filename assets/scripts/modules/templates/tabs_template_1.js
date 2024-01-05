/** templates/tabs_template_1.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: English	
 */
export async function tabsTemplateOne(){
	const template = `
		<div class='details-block tab-one relative'>
			<div class='ruler one fixed' data-width='30'></div>
			<details class='page-tab open-down relative'>
				<summary class='to-down-caret relative' data-added-title=' (BLOCKCHAIN, a brief explanation, focused to the financial part.)' title='Open (BLOCKCHAIN, a brief explanation, focused to the financial part.)'><i class='blockchain-bg absolute'></i><div class='summary-ruler absolute'></div></summary>
				<div class='details-content fixed'>
					<h3>What is a Blockchain?</h3>
					<p>Blockchain is a revolutionary technology that has the potential to transform many industries. It is a distributed ledger that records transactions in a transparent and tamper-proof manner. This makes it ideal for tracking assets, such as money, goods, and intellectual property.</p>
					<h3>Key Characteristics of the Blockchain.</h3>
					<ul class='relative' role='list'>
						<li class='list-square relative'><strong class='topic'>Decentralization:</strong> Blockchain is not controlled by any single entity, but rather by a distributed network of computers. This makes it more resistant to fraud and censorship.</li>
						<li class='list-square relative'><strong class='topic'>Immutability:</strong> Once a transaction is added to the blockchain, it is almost impossible to change or delete. This provides a high degree of security and trust.</li>
						<li class='list-square relative'><strong class='topic'>Transparency:</strong> All transactions on the blockchain are publicly visible. This makes it easy to track and verify the history of an asset.</li>
					</ul>
					<h3>Financial Application of the Blockchain</h3>
					<ul class='relative' role='list'>
						<li class='list-square relative'><strong class='topic'>Finance:</strong> Blockchain is already being used to create new forms of currency, such as Bitcoin, Ethereum and newcomer CpCoin. It is also being used to streamline financial transactions and improve security.</li>
					</ul>				
					<h3>Challenges Facing the Blockchain</h3>
					<ul class='relative' role='list'>
						<li class='list-square relative'><strong class='topic'>*Scalability:</strong> The Bitcoin blockchain can only process a limited number of transactions per second. This could make it difficult to use for applications that require high transaction volume.</li>
						<li class='list-square relative'><strong class='topic'>*Energy consumption:</strong> Mining for new bitcoins is a very energy-intensive process. This could lead to environmental concerns if blockchain technology becomes widely adopted.</li>
						<li class='list-square relative'><strong class='topic'>Regulation:</strong>The legal and regulatory landscape around blockchain technology is still evolving. This could make it difficult for businesses to adopt and use the technology.</li>
					</ul>
					<h3>*Doesn't apply to the CPCoin!</h3>
					<p>CPCoin is based on a user and service-centric multipurpose blockchain platform (CPCx0 Chain) and is a cryptocurrency built upon a proven open-source crypto projects’ frame-work. As a crypto-technology integrator, it combines and enhances existing and new crypto-technology features and services, creating a powerful platform for the digital economy. By harnessing the revolutionary potential of blockchain technology, it aims to redefine the future of financial interactions and drive innovation across industries and applications.</p>
				</div>
			</details>
		</div>
		<div class='details-block tab-two relative'>
			<div class='ruler two fixed' data-width='30'></div>
			<details class='page-tab open-down relative'>
				<summary class='to-down-caret relative' data-added-title=' (The metaverse, a brief overview.)' title='Open (The metaverse, a brief overview.)'><i class='metaverse-bg absolute'></i><div class='summary-ruler absolute'></div></summary>
				<div class='details-content fixed'>
					<h3>The metaverse.</h3>
					<p>is a term used to describe a hypothetical future iteration of the internet as a single, universal and immersive virtual world that can be accessed by everyone, anywhere. It is often envisioned as a successor to the current internet, which is primarily text-based and accessed through screens. Instead, the metaverse would be a fully immersive 3D world where people can interact with each other and with digital objects using virtual reality (VR) or augmented reality (AR) headsets.</p>
					<h3>Early stages of development.</h3>
					<p>The metaverse is still in its early stages of development, but there are already several companies working on different aspects of it. Some of the most well-known companies working on the metaverse include Meta (formerly Facebook), Microsoft,Epic Games and newcomer CPGames.</p>
					<h3>Potential applications.</h3>
					<p>The metaverse is expected to have a wide range of potential applications, including:</p>
					<ul class='relative' role='list'>
						<li class='list-disc relative'><strong class='topic'>Social networking:</strong> People could use the metaverse to hang out with friends, attend virtual events, and even start new businesses.</li>
						<li class='list-disc relative'><strong class='topic'>Education:</strong> Students could learn in virtual classrooms that are more engaging and interactive than traditional classrooms.</li>
						<li class='list-disc relative'><strong class='topic'>Gaming:</strong> The metaverse could be used to create new and immersive gaming experiences.</li>
						<li class='list-disc relative'><strong class='topic'>Work:</strong> Employees could work remotely in virtual offices that are more productive and collaborative than traditional offices.</li>
						<li class='list-disc relative'><strong class='topic'>E-commerce:</strong> Stores could create virtual shopping malls where people can browse and purchase products eq <strong class='quoted-double'>The SpaceMall</strong></li>
						<li class='list-disc relative'><strong class='topic'>Entertainment:</strong> People can watch movies, concerts, and other events in the metaverse.</li>
					</ul>
					<h3>Challenges.</h3>
					<p>The metaverse has the potential to revolutionize the way we live, work, and play.</p>
					<p>However, there are also a number of challenges that need to be addressed before it can become a reality</p>
					<p>These challenges include:</p>
					<ul class='relative' role='list'>
						<li class='list-disc relative'><strong class='topic'>Technology:</strong> The technology needed to create a truly immersive and realistic metaverse is not yet fully developed.</li>
						<li class='list-disc relative'><strong class='topic'>Infrastructure:</strong> The internet infrastructure needs to be upgraded to support the large amount of data that will be needed to power the metaverse.</li>
						<li class='list-disc relative'><strong class='topic'>Privacy:</strong> There are concerns about how personal data will be collected and used in the metaverse.</li>
						<li class='list-disc relative'><strong class='topic'>Safety:</strong> There are concerns about the potential for abuse and harassment in the metaverse.</li>
					</ul>
					<h3>Despite the challenges.</h3>
					<p>The metaverse is a promising technology with the potential to change the world. As the technology develops and the challenges are addressed, the metaverse could become a major part of our lives in the years to come.</p>
				</div>
			</details>
		</div>
	`;
	return await template;
}