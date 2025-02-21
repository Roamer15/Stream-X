import styles from './Cast.module.css'
import PropTypes from 'prop-types'

export default function Cast({cast}) {
    return (
        <>
           <h2 className={styles.h2}>Top Cast</h2>
           <div className={styles.cast}>
           {cast.map((actor) => (
          <div key={actor.id} className={styles.profiles}>
            <img 
  src={actor.profile_path 
    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` 
    : "https://www.google.com/imgres?q=profile%20holder%20img&imgurl=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png&imgrefurl=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FhJmwxix_image-placeholder-png-user-profile-placeholder-image-png%2F&docid=FWuQBXqrG3flsM&tbnid=dma6ZQQxQHKJQM&vet=12ahUKEwjY1Obc79SLAxXti_0HHfoPIiEQM3oECCwQAA..i&w=840&h=881&hcb=2&ved=2ahUKEwjY1Obc79SLAxXti_0HHfoPIiEQM3oECCwQAA" // Use a real placeholder image
  } 
  alt={actor.name} 
/>

            <div className={styles.perso}>
            <h4>{actor.name}</h4>
            <h6>{actor.character}</h6>
            </div>
         
          </div>
        ))}
        </div>
        </>
        
    )
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ).isRequired,
}