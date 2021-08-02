document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoWeeksFromNow = (new Date().getTime() / 1000) + (86400 * 14) + 1;
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoWeeksFromNow)
  
      // Start the countdown
      .start()
  
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('We are Open!');
      });
})

/*

const launchDate = (new Date().getTime() / 1000) + 1209600000; //always start 2 weeks ahead of the days date

const countdown = () => {
    
    const now = new Date().getTime();
    const difference = launchDate - now;

      
        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24
      
        let timeDays = Math.floor(difference / days)
        let timeHours = Math.floor((difference % days) / hours)
        let timeMinutes = Math.floor((difference % hours) / minutes)
        let timeSeconds = Math.floor((difference % minutes) / seconds)

        // adding the zero causes lag
      
        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
        timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
      
    document.getElementById("days").innerText = timeDays
    document.getElementById("hours").innerText = timeHours
    document.getElementById("minutes").innerText = timeMinutes
    document.getElementById("seconds").innerText = timeSeconds
    
}
    
    setInterval(countdown, 1000);
    //never clears the interval
*/

//problems:
// 00 
// lag
// doesn't clear interval
