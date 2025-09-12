import PhotoRelay from '@/components/PhotoRelay'
import type {ImageData} from '@/components/PhotoRelay'

export default function SponsorsPage() {
 const logos1: ImageData[] = [
  { id: 1, src: "/images/logos/decathlon.png", title: "Decathlon" },
  { id: 2, src: "/images/logos/hdfc.png", title: "HDFC Bank" },
  { id: 3, src: "/images/logos/volvo.png", title: "Volvo" },
  { id: 4, src: "/images/logos/devfolio.png", title: "Devfolio" },
  { id: 5, src: "/images/logos/ather.png", title: "Ather" },
{ id: 6, src: "/images/logos/toi.png", title: "Times of India" },
  { id: 7, src: "/images/logos/cisco.png", title: "Cisco" },
  { id: 8, src: "/images/logos/unacademy.png", title: "Unacademy" },
    { id: 9, src: "/images/logos/monster.jpeg", title: "Monster Energy" },
  { id: 10, src: "/images/logos/iesmaster.png", title: "IES Master" },
  { id: 11, src: "/images/logos/aequs.jpeg", title: "Aequs" },
  { id: 12, src: "/images/logos/dell.png", title: "Dell" },
  { id: 13, src: "/images/logos/bosch.png", title: "Bosch" },
  { id: 14, src: "/images/logos/intel.jpeg", title: "Intel" },
  { id: 15, src: "/images/logos/bigfm.jpeg", title: "Big FM" },
]

const logos2: ImageData[] = [
  { id: 16, src: "/images/logos/tata.jpeg", title: "Tata" },
  { id: 17, src: "/images/logos/royalenfield.png", title: "Royal Enfield" },
  { id: 18, src: "/images/logos/ibm.png", title: "IBM" },
  { id: 19, src: "/images/logos/canara.png", title: "Canara Bank" },
  { id: 20, src: "/images/logos/zebronics.jpeg", title: "Zebronics" },
  { id: 21, src: "/images/logos/sbi.png", title: "SBI" },
  { id: 22, src: "/images/logos/time.png", title: "TIME" },
  { id: 23, src: "/images/logos/sap.png", title: "SAP" },
  { id: 24, src: "/images/logos/reliance.jpeg", title: "Reliance Industries" },
  { id: 25, src: "/images/logos/lic.png", title: "LIC" },
  { id: 26, src: "/images/logos/cfa.png", title: "CFA Institute" },

]

const logos3: ImageData[] = [
  { id: 28, src: "/images/logos/imfs.jpeg", title: "IMFS" },
  { id: 29, src: "/images/logos/easemytrip.png", title: "EaseMyTrip" },
  { id: 30, src: "/images/logos/wellsfargo.png", title: "Wells Fargo" },
  { id: 31, src: "/images/logos/coursehero.png", title: "Course Hero" },
  { id: 32, src: "/images/logos/beardo.png", title: "Beardo" },
  { id: 33, src: "/images/logos/mescom.png", title: "Mescom" },
  { id: 34, src: "/images/logos/skmepl.jpeg", title: "SKMEPL" },
  { id: 35, src: "/images/logos/icici.png", title: "ICICI Bank" },
  { id: 36, src: "/images/logos/stockgro.jpeg", title: "StockGro" },
  { id: 37, src: "/images/logos/unstop.png", title: "Unstop" },
  { id: 38, src: "/images/logos/bob.png", title: "Bank of Baroda" },
  { id: 39, src: "/images/logos/moxx.jpeg", title: "Moxx Entertainments" },
  { id: 40, src: "/images/logos/tribevibe.jpeg", title: "TribeVibe" },
  { id: 41, src: "/images/logos/kreativekeda.png", title: "Kreative Keda" },

]


  return (
    <div className="flex flex-col space-y-10">
       <div
          className="fixed min-h-screen inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/main_bg.png')", opacity: 0.45 }}
        />
  
<div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">

  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
    Our Sponsors
  </h1>

 
  <div className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed my-5 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-center sm:text-justify">
    <p className="mb-4">
      Engineer '25 is proud to have the support of industry leaders and organizations who share
      our vision of fostering innovation and technological excellence.
    </p>

    <p className="mb-4">
      Our sponsors play a crucial role in making this four-day celebration of technology and
      creativity possible, enabling us to provide world-class experiences to over 6,000
      participants from 150 colleges across 65 countries.
    </p>

    <p className="mb-4 text-lg sm:text-xl md:text-2xl font-semibold text-center">
      We thank our past sponsors for their invaluable support and collaboration.
    </p>
  </div>
</div>

      <PhotoRelay images={logos1} direction="left" speed={30} />
      <PhotoRelay images={logos2} direction="right" speed={35} />
      <PhotoRelay images={logos3} direction="left" speed={25} />
    </div>
  )
}
