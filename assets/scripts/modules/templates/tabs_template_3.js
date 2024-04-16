/** templates/tabs_template_3.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Thai	
 */
export async function tabsTemplateThree(){
	const template = `
		<div class='details-block tab-one relative'>
			<div class='ruler one fixed' data-width='30'></div>
			<details class='page-tab open-down relative'>
				<summary class='to-down-caret blockchain-bg relative' data-added-title='(บล็อกเชน, คำอธิบายสั้น ๆ ที่เกี่ยวข้องกับส่วนทางการเงิน.)' title='Open (บล็อกเชน, คำอธิบายสั้น ๆ ที่เกี่ยวข้องกับส่วนทางการเงิน.)'><i class='blockchain-bg absolute'></i><div class='summary-ruler absolute'></div></summary>
				<div class='details-content fixed'>
					<h3>บล็อคเชนคืออะไร?</h3>
					<p>Blockchain เป็นเทคโนโลยีปฏิวัติที่มีศักยภาพในการเปลี่ยนแปลงอุตสาหกรรมต่างๆ เป็นบัญชีแยกประเภทแบบกระจายที่บันทึกธุรกรรมในลักษณะที่โปร่งใสและป้องกันการงัดแงะ ทำให้เหมาะสำหรับการติดตามทรัพย์สิน เช่น เงิน สินค้า และทรัพย์สินทางปัญญา</p>
					<h3>ลักษณะสำคัญของบล็อคเชน</h3>
					<ul class='relative' role='list'>
						<li class='list-square relative'><strong class='topic'>การกระจายอำนาจ:</strong> บล็อกเชนไม่ได้ถูกควบคุมโดยหน่วยงานใดหน่วยงานหนึ่ง แต่ควบคุมโดยเครือข่ายคอมพิวเตอร์แบบกระจาย ทำให้ทนทานต่อการฉ้อโกงและการเซ็นเซอร์ได้ดีขึ้น.</li>
						<li class='list-square relative'><strong class='topic'>ความไม่เปลี่ยนรูป:</strong> เมื่อเพิ่มธุรกรรมลงในบล็อคเชนแล้ว แทบจะเป็นไปไม่ได้เลยที่จะเปลี่ยนแปลงหรือลบ สิ่งนี้ให้ความปลอดภัยและความไว้วางใจในระดับสูง.</li>
						<li class='list-square relative'><strong class='topic'>ความโปร่งใส:</strong> ธุรกรรมทั้งหมดบนบล็อกเชนจะปรากฏต่อสาธารณะ ทำให้ง่ายต่อการติดตามและตรวจสอบประวัติของสินทรัพย์.</li>
					</ul>
					<h3>การประยุกต์ใช้ทางการเงินของ Blockchain.</h3>
					<ul class='relative' role='list'>
						<li class='list-square relative'><strong class='topic'>การเงิน:</strong> บล็อคเชนถูกนำมาใช้เพื่อสร้างสกุลเงินรูปแบบใหม่ เช่น Bitcoin, Ethereum และ CpCoin ที่กำลังมาใหม่ นอกจากนี้ยังใช้เพื่อปรับปรุงธุรกรรมทางการเงินและปรับปรุงความปลอดภัยอีกด้วย.</li>
					</ul>
					<h3>ความท้าทายที่ต้องเผชิญกับบล็อคเชน.</h3>
					<ul class='relative' role='list'>
						<li class='list-square relative'><strong class='topic'>*ความสามารถในการขยายขนาด:</strong> Bitcoin blockchain สามารถประมวลผลธุรกรรมในจำนวนจำกัดต่อวินาทีเท่านั้น ซึ่งอาจทำให้ใช้งานแอปพลิเคชันที่ต้องการปริมาณธุรกรรมสูงได้ยาก.</li>
						<li class='list-square relative'><strong class='topic'>*การใช้พลังงาน:</strong> การขุดหา bitcoin ใหม่เป็นกระบวนการที่ใช้พลังงานมาก สิ่งนี้อาจนำไปสู่ความกังวลด้านสิ่งแวดล้อมหากเทคโนโลยีบล็อคเชนถูกนำมาใช้กันอย่างแพร่หลาย.</li>
						<li class='list-square relative'><strong class='topic'>ระเบียบข้อบังคับ:</strong> ภูมิทัศน์ทางกฎหมายและข้อบังคับเกี่ยวกับเทคโนโลยีบล็อคเชนยังคงมีการพัฒนา สิ่งนี้อาจทำให้ธุรกิจต่างๆ ปรับใช้และใช้เทคโนโลยีได้ยาก.</li>
					</ul>
					<h3>*ใช้ไม่ได้กับ CPCoin!</h3>
					<p>CPCoin ขึ้นอยู่กับผู้ใช้และแพลตฟอร์มบล็อกเชนอเนกประสงค์ที่เน้นการบริการ (CPCx0 Chain) และเป็นสกุลเงินดิจิทัลที่สร้างขึ้นจากกรอบงานของโครงการเข้ารหัสโอเพ่นซอร์สที่ได้รับการพิสูจน์แล้ว ในฐานะผู้รวบรวมเทคโนโลยีเข้ารหัสลับ บริษัทจะผสมผสานและปรับปรุงที่มีอยู่และใหม่ คุณสมบัติและบริการด้านเทคโนโลยีเข้ารหัสลับ สร้างแพลตฟอร์มที่ทรงพลังสำหรับเศรษฐกิจดิจิทัล ด้วยการควบคุมศักยภาพในการปฏิวัติของเทคโนโลยีบล็อกเชน มีเป้าหมายที่จะกำหนดอนาคตของการโต้ตอบทางการเงินใหม่ และขับเคลื่อนนวัตกรรมในอุตสาหกรรมและแอปพลิเคชัน</p>
				</div>
			</details>
		</div>
		<div class='details-block tab-two relative'>
			<div class='ruler two fixed' data-width='30'></div>
			<details class='page-tab open-down relative'>
				<summary class='to-down-caret relative' data-added-title=' (Metaverse ภาพรวมโดยย่อ)'  title='Open (Metaverse ภาพรวมโดยย่อ)'><i class='metaverse-bg absolute'></i><div class='summary-ruler absolute'></div></summary>
				<div class='details-content fixed'>
					<h3>เมตาเวิร์ส.</h3>
					<p>เป็นคำที่ใช้อธิบายการจำลองอินเทอร์เน็ตในอนาคตโดยสมมุติว่าเป็นโลกเสมือนจริงที่เป็นสากลและดื่มด่ำซึ่งทุกคนสามารถเข้าถึงได้จากทุกที่ มักถูกมองว่าเป็นผู้สืบทอดต่ออินเทอร์เน็ตในปัจจุบัน ซึ่งส่วนใหญ่จะเป็นแบบข้อความและเข้าถึงได้ผ่านหน้าจอ Metaverse จะเป็นโลก 3 มิติที่ดื่มด่ำอย่างเต็มที่ ซึ่งผู้คนสามารถโต้ตอบกันและกับวัตถุดิจิทัลโดยใช้ชุดหูฟังความเป็นจริงเสมือน (VR) หรือชุดหูฟังความเป็นจริงเสริม (AR).</p>
					<h3>ระยะเริ่มต้นของการพัฒนา.</h3>
					<p>Metaverse ยังอยู่ในช่วงเริ่มต้นของการพัฒนา แต่มีหลายบริษัทที่ทำงานในด้านที่แตกต่างกันออกไป บริษัทที่มีชื่อเสียงที่สุดบางแห่งที่ทำงานเกี่ยวกับ metaverse ได้แก่ Meta (เดิมชื่อ Facebook), Microsoft, Epic Games และ CPGames หน้าใหม่.</p>
					<h3>การใช้งานที่เป็นไปได้.</h3>
					<p>Metaverse คาดว่าจะมีการใช้งานที่หลากหลาย รวมถึง:</p>
					<ul class='relative' role='list'>
						<li class='list-disc relative'><strong class='topic'>เครือข่ายทางสังคม:</strong> ผู้คนสามารถใช้ Metaverse เพื่อออกไปเที่ยวกับเพื่อนฝูง เข้าร่วมกิจกรรมเสมือนจริง และแม้กระทั่งเริ่มต้นธุรกิจใหม่.</li>
						<li class='list-disc relative'><strong class='topic'>การศึกษา:</strong> นักเรียนสามารถเรียนรู้ในห้องเรียนเสมือนจริงที่น่าดึงดูดและมีการโต้ตอบมากกว่าห้องเรียนแบบดั้งเดิม.</li>
						<li class='list-disc relative'><strong class='topic'>การเล่นเกม:</strong> metaverse สามารถใช้เพื่อสร้างประสบการณ์การเล่นเกมใหม่และดื่มด่ำ.</li>
						<li class='list-disc relative'><strong class='topic'>งาน:</strong> พนักงานสามารถทำงานจากระยะไกลในสำนักงานเสมือนที่มีประสิทธิภาพและทำงานร่วมกันได้มากกว่าสำนักงานแบบเดิม.</li>
						<li class='list-disc relative'><strong class='topic'>อีคอมเมิร์ซ:</strong> ร้านค้าสามารถสร้างห้างสรรพสินค้าเสมือนจริงที่ผู้คนสามารถเลือกดูและซื้อสินค้าได้เช่น <strong class='quoted-double'>The SpaceMall</strong>.</li>
						<li class='list-disc relative'><strong class='topic'>ความบันเทิง:</strong> ผู้คนสามารถรับชมภาพยนตร์ คอนเสิร์ต และกิจกรรมอื่น ๆ ได้ใน metaverse.</li>
					</ul>
					<h3>ความท้าทาย.</h3>
					<p>Metaverse มีศักยภาพที่จะปฏิวัติวิถีชีวิต การทำงาน และการเล่นของเรา.</p>
					<p>อย่างไรก็ตาม ยังมีความท้าทายอีกหลายประการที่ต้องจัดการก่อนที่จะกลายเป็นความจริง.</p>
					<p>ความท้าทายเหล่านี้ได้แก่:</p>
					<ul class='relative' role='list'>
						<li class='list-disc relative'><strong class='topic'>เทคโนโลยี:</strong> เทคโนโลยีที่จำเป็นในการสร้าง metaverse ที่สมจริงและสมจริงยังไม่ได้รับการพัฒนาอย่างสมบูรณ์.</li>
						<li class='list-disc relative'><strong class='topic'>โครงสร้างพื้นฐาน:</strong> โครงสร้างพื้นฐานอินเทอร์เน็ตจำเป็นต้องได้รับการอัปเกรดเพื่อรองรับข้อมูลจำนวนมากที่จำเป็นสำหรับการขับเคลื่อน metaverse.</li>
						<li class='list-disc relative'><strong class='topic'>ความเป็นส่วนตัว:</strong> มีความกังวลเกี่ยวกับวิธีการรวบรวมและใช้งานข้อมูลส่วนบุคคลใน metaverse.</li>
						<li class='list-disc relative'><strong class='topic'>ความปลอดภัย:</strong> มีความกังวลเกี่ยวกับศักยภาพของการละเมิดและการคุกคามใน metaverse.</li>
					</ul>
					<h3>แม้จะมีความท้าทาย.</h3>
					<p>Metaverse เป็นเทคโนโลยีที่มีศักยภาพในการเปลี่ยนแปลงโลก เมื่อเทคโนโลยีพัฒนาและจัดการกับความท้าทาย metaverse อาจกลายเป็นส่วนสำคัญในชีวิตของเราในปีต่อ ๆ ไป.</p>
				</div>
			</details>
		</div>
	`;
	return await template;
}