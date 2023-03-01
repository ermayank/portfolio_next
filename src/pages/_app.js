import "@/styles/globals.css"
import Script from "next/script"
import "bootstrap/dist/css/bootstrap.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="vendor/purecounter/purecounter_vanilla.js"></Script>
      <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="vendor/glightbox/js/glightbox.min.js"></Script>
      <Script src="vendor/isotope-layout/isotope.pkgd.min.js"></Script>
      <Script src="vendor/swiper/swiper-bundle.min.js"></Script>
      <Script src="vendor/waypoints/noframework.waypoints.js"></Script>
      {/* <!-- Template Main JS File --> */}
      {/* <Script src='js/main.js'></Script> */}
      <Component {...pageProps} />
    </>
  )
}
