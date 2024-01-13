import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#a39f9f"
    foregroundColor="#eaebea"
    {...props}
  >
    <circle cx="140" cy="140" r="134" /> 
    <rect x="26" y="284" rx="0" ry="0" width="236" height="40" /> 
    <rect x="30" y="343" rx="0" ry="0" width="231" height="57" /> 
    <rect x="29" y="425" rx="0" ry="0" width="95" height="31" /> 
    <rect x="164" y="424" rx="0" ry="0" width="98" height="31" />
  </ContentLoader>
)

export default MyLoader

