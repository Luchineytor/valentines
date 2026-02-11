import image from '../assets/image1.png'

export default function SecondCard() {
  return (
    <div className="card card--photo">
      <div className="photoWrap">
        <img
          className="photo"
          src={image}
          alt="Valentine vibe"
          onError={(e) => {
            console.error('Image failed to load:', image)
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      <h2 className="title">🥰 Aww, sabía que sí</h2>
      <p className="text">
        Mira, tu y yo, un atardecer naranja y decisiones serias; tu leyendome el perfume y alcanzandome el vino mientras me duermo en tus muslos, tenemos plan? 
      </p>
    </div>
  )
}