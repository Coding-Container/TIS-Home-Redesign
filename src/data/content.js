// All copy, links and image paths live here. Copy is taken from tis.edu.in.
// NOTE: sub-page slugs are generated from the labels (see `page`); verify against the live site if a link 404s.
export const SITE = 'https://tis.edu.in'
const slug = (s) => s.toLowerCase().replace(/&/g, '').replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const page = (label, href) => ({ label, href: href ?? `${SITE}/${slug(label)}/` })

export const contact = {
  phone: '+91-9837983791',
  phoneHref: 'tel:+919837983791',
  phoneDisplay: '+91-98379 83791',
  email: 'info@tis.edu.in',
  address: 'Tulas International School, Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  landlines: [{ label: '0135-2699444', href: 'tel:0135-2699444' }, { label: '0135-2699666', href: 'tel:0135-2699666' }],
  whatsapp: 'https://wa.me/919837983791',
  mapsLink: 'https://www.google.com/maps/place/Tula\'s+International+School+-+Best+Boarding+School+in+Dehradun+(Uttarakhand)/@30.3430336,77.8865903,17z',
  mapEmbed: 'https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India&t=m&z=10&output=embed',
}
export const applyUrl = 'https://admission.tis.edu.in'

export const navGroups = [
  { label: 'About TIS', items: ['Our History', 'Why Choose Us?', 'Vision & Mission', 'Awards & Achievements', "Headmaster's Profile", 'Our Management', 'Virtual Tour'].map((l) => page(l, l === 'Virtual Tour' ? `${SITE}/virtual-tour/` : undefined)) },
  { label: 'Academics', items: ['Pedagogy', 'Curriculum', 'Streams Offered', 'International Tie-Ups', 'Publications', 'Digital Workstations', 'Awadh Tinkering Lab'].map((l) => page(l)) },
  { label: 'Boarding Life', items: ['Pastoral Care', 'Food & Nutrition', 'Facilities', 'Infirmary & Medical Facilities', 'Our House System', 'Teachers Profile'].map((l) => page(l)) },
  { label: 'Beyond Academics', items: ['Sports', 'Beyond The Curriculum', 'Clubs & Societies', 'Celebrations', 'Mentor & Mentee System', 'Career Counselling', 'Raasta Students Counselling'].map((l) => page(l)) },
  { label: 'Events', items: ['Sports Day', '38th National Games', 'Founders Day', 'Confluence', 'Prominent Personalities', 'Sports Achievements'].map((l) => page(l)) },
  { label: 'Admission', items: [page('Admission Procedure'), page('Pay Fee Online', 'https://tis.fedena.com/'), page('Fee Structure'), page('Scholarship Programs'), page('Withdrawal Policy')] },
  { label: 'Mandatory Disclosure', items: [page('Mandatory Disclosure')] },
  { label: 'Alumni Network', items: [page('Alumni Network')] },
  { label: 'Quick Links', items: ['Blogs', 'Contact Us', 'Newsletter', 'Careers', 'Transfer Certificate', 'Parent Testimonial'].map((l) => page(l)) },
]

export const menuCards = [
  { title: 'Explore Our Vibrant Campus Life.', img: '/img/c-run.jpg', href: `${SITE}/beyond-the-curriculum/` },
  { title: 'Discover Our Comprehensive Academic Programs.', img: '/img/q-reader.jpg', href: `${SITE}/curriculum/` },
  { title: 'Learn About Our State-Of-The-Art Boarding Facilities.', img: '/img/dining.jpg', href: `${SITE}/facilities/` },
  { title: 'Join Us In Celebrating Diverse Cultural Events.', img: '/img/c-guitar.jpg', href: `${SITE}/celebrations/` },
]

export const heroPairs = [
  { left: { src: '/img/h-basket.png', alt: 'Students leaping for a basketball' }, right: { src: '/img/h-dance.png', alt: 'Student performing classical dance', fade: true } },
  { left: { src: '/img/h-cricket.png', alt: 'Student playing a cricket shot' }, right: { src: '/img/h-karate.png', alt: 'Student practising karate' } },
  { left: { src: '/img/h-science.png', alt: 'Student working in a physics lab' }, right: { src: '/img/h-shooter.png', alt: 'Student aiming an air rifle' } },
  { left: { src: '/img/h-pot.png', alt: 'Student shaping a clay pot' }, right: { src: '/img/h-paint.png', alt: 'Student painting' } },
]

export const classes = ['Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII']
export const countryCodes = ['+91', '+1', '+44', '+61', '+65', '+971', '+977', '+975']
export const states = 'Andaman and Nicobar Islands,Andhra Pradesh,Arunachal Pradesh,Assam,Bihar,Chandigarh,Chhattisgarh,Dadra and Nagar Haveli,Delhi,Goa,Gujarat,Haryana,Himachal Pradesh,Jammu and Kashmir,Jharkhand,Karnataka,Kerala,Lakshadweep,Madhya Pradesh,Maharashtra,Manipur,Meghalaya,Mizoram,Nagaland,Odisha,Other,Pondicherry,Punjab,Rajasthan,Sikkim,Tamil Nadu,Telangana,Tripura,Uttar Pradesh,Uttarakhand,West Bengal'.split(',')

export const sportsWithPhotos = [
  ['Archery', 's-archery'], ['Cycling', 's-cycling'], ['Hockey', 's-hockey'], ['Swimming', 's-swimming'],
  ['Taekwondo', 's-taekwondo'], ['Football', 's-football'], ['Shooting Range', 's-shooting'], ['Horse Riding', 's-horse'],
].map(([name, file]) => ({ name, img: `/img/${file}.jpg` }))
export const moreSports = ['Billiards', 'Squash', 'Volleyball', 'Basketball', 'Cricket', 'Lawn Tennis', 'Badminton', 'Table Tennis']

export const stats = [
  { icon: 'Building2', value: 22, label: 'Acre polution free campus' },
  { icon: 'Dumbbell', value: 16, suffix: '+', label: 'Olympic sports' },
  { icon: 'HeartPulse', text: '24*7', label: 'Medical assistance' },
  { icon: 'Percent', value: 6, suffix: ':1', label: 'Student teacher ratio' },
]

export const rankings = [
  { rank: '#1', place: 'In Dehradun', text: 'Co-Educational Boarding School in Dehradun by Education Today' },
  { rank: '#2', place: 'In Uttarakhand', text: 'Co-Educational Boarding School in North India by Education Today' },
  { rank: '#1', place: 'In North India', text: 'Co-Educational Boarding School in North India by Outlook' },
  { rank: '#4', place: 'In India', text: 'Co-Educational Boarding School in India by Education Today' },
]

export const personalities = [
  { name: 'Sakshi Malik', img: '/img/p-sakshi.jpg', text: 'First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014 Commonwealth Games, Rajiv Gandhi Khel Ratan Awardee 2016, Padma Shri Awardee 2017' },
  { name: 'Vishesh Bhriguvanshi', img: '/img/p-vishesh.jpg', text: 'Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008' },
  { name: 'Prakashi Tomar & Late Ms Chandro Tomar', img: '/img/p-prakashi.jpg', text: 'Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the biopic movie “Saand ki Aankh”. Known as Shooter Dadi, 30 National Championship winner' },
  { name: 'Abhishek Verma', img: '/img/p-abhishek.jpg', text: '6th Highest World Ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013' },
  { name: 'Aditi Gopichand Swami', text: '7th Highest World Ranking, Arjuna Awardee, World Champion in Archery 2024' },
  { name: 'Jeevan Jyot Singh Teja', text: 'Dronacharya Awardee in Archery 2022' },
  { name: 'Ojas Devtale', text: '9th Highest World Ranking, Arjuna Awardee 2023 and current world champion in Archery' },
  { name: 'Rajat Chauhan', text: '5th Highest World Ranking, Arjuna Awardee 2016 in Archery' },
]

export const parentVideos = [1, 2, 3].map((n) => `https://assets.tulas.edu.in/tis/${n}VIDEO-compressed.mp4`)

export const reviews = [
  { name: 'Tashi Tsering', rel: 'F/O Jigmet Skaldon', img: '/img/r-tashi.jpg', text: 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.' },
  { name: 'Namita Agarwal', rel: 'M/O Krishna Agarwal', img: '/img/r-namita.jpg', text: 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.' },
  { name: 'Sandeep Kumar', rel: 'F/O Aryan', img: '/img/r-sandeep.jpg', text: 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.' },
  { name: 'Pinky Sharma', rel: 'M/O Swastik Sharma', text: 'I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.' },
  { name: 'Suresh Kumar', rel: 'F/O Aditya Kumar', text: 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.' },
  { name: 'Mrs Urja Bhayani', rel: 'M/O Shikha & Samarth Bhayani', text: 'Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.' },
]

export const collaborations = [
  ['Universidad Autonoma de Chile', 'l-chile'], ['Synergy University', 'l-sinergia'], ["Universitat d'Andorra", 'l-andorra'],
  ['SPbGUT', 'l-spbgut'], ['INSEEC', 'l-inseec'], ['Trinity College London', 'l-trinity'],
].map(([name, f]) => ({ name, img: `/img/${f}.jpg` }))

export const footerLinks = [
  { label: 'FAQ', href: `${SITE}/faq/` },
  { label: 'Calendar', href: `${SITE}/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf` },
  { label: 'Brochure', href: `${SITE}/MandatoryPDF/TIS_BROCHURE.pdf` },
  { label: 'Privacy Policy', href: `${SITE}/privacy-policy/` },
  { label: 'Terms & Conditions', href: `${SITE}/terms-conditions/` },
  { label: 'Disclaimer', href: `${SITE}/disclaimer/` },
  { label: 'Disciplinary Policy', href: `${SITE}/MandatoryPDF/DisciplinaryPolicy.pdf` },
  { label: 'Mobile Phone Policy', href: `${SITE}/MandatoryPDF/MobilePhonePolicy.pdf` },
  { label: 'Child Welfare & Safety Policy', href: `${SITE}/MandatoryPDF/childWelfarePolicy.pdf` },
]
export const socials = [
  { icon: 'Facebook', label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
  { icon: 'Twitter', label: 'X (Twitter)', href: 'https://twitter.com/tulas_intschool?lang=en' },
  { icon: 'Linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/' },
  { icon: 'Instagram', label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/?hl=en' },
  { icon: 'Youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
]
