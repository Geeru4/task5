const buttonElement = document.querySelector('.button');

const textElement = document.querySelector('.text-main');

if (textElement.innerHTML.length >= 20) {
    textElement.innerHTML = 'My name is Walter Hartwell White...'
}
function readmore() {
    if (textElement.innerHTML.length > 20) {

        textElement.innerHTML = 'My name is Walter Hartwell White...'

        buttonElement.innerHTML = "Read More"
        
    } else {
        buttonElement.innerHTML = "Read Less"

        textElement.innerHTML = 'My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If youre watching this tape, Im probably dead– murdered by my brother-in-law, Hank Schrader. Hank has been building a meth empire for over a year now, and using me as his chemist. Shortly after my 50th birthday, he asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using connections that he made through his career with the DEA. I was... astounded. I... I always thought Hank was a very moral man, and I was particularly vulnerable at the time – something he knew and took advantage of. I was reeling from a cancer diagnosis that was poised to bankrupt my family. Hank took me in on a ride-along and showed me just how much money even a small meth operation could make. And I was weak. I didnt want my family to go into financial ruin, so I agreed. Hank had a partner, a businessman named Gustavo Fring. Hank sold me into servitude to this man. And when I tried to quit, Fring threatened my family. I didnt know where to turn. Eventually, Hank and Fring had a falling-out. Things escalated. Fring was able to arrange – uh, I guess... I guess you call it a "hit" – on Hank, and failed, but Hank was seriously injured. And I wound up paying his medical bills, which amounted to a little over $177,000. Upon recovery, Hank was bent on revenge. Working with a man named Hector Salamanca, he plotted to kill Fring. The bomb that he used was built by me, and he gave me no option in it. I have often contemplated suicide, but Im a coward. I wanted to go to the police, but I was frightened. Hank had risen to become the head of the Albuquerque DEA. To keep me in line, he took my children. For three months, he kept them. My wife had no idea of my criminal activities, and was horrified to learn what I had done. I was in hell. I hated myself for what I had brought upon my family. Recently, I tried once again to quit, and in response, he gave me this. [Walt points to the bruise on his face left by Hank in Blood Money. I cant take this anymore. I live in fear every day that Hank will kill me, or worse, hurt my family. All I could think to do was to make this video and hope that the world will finally see this man for what he really is.'
    }

}