import { getQuoteOfTheDay } from './quotes';

export function homePage(container: HTMLElement): void {
  const quote = getQuoteOfTheDay();

  const content = document.createElement('div');
  content.innerHTML = `
<pre class="ascii-art">
  ______   __    __                           ______    ______        
 /      \\ |  \\  |  \\                         /      \\  /      \\       
|  ######\\| ## _| ##_     ______    ______  |  ######\\|  ######\\      
| ##__| ##| ##|   ## \\   /      \\  /      \\ | ##  | ##| ##___\\##      
| ##    ##| ## \\######  |  ######\\|  ######\\| ##  | ## \\##    \\       
| ########| ##  | ## __ | ##    ##| ##   \\##| ##  | ## _\\######\\      
| ##  | ##| ##  | ##|  \\| ########| ##      | ##__/ ##|  \\__| ##      
| ##  | ##| ##   \\##  ## \\##     \\| ##       \\##    ## \\##    ##      
 \\##   \\## \\##    \\####   \\####### \\##        \\######   \\######       
</pre>

<div>
Welcome to AlterOS!
This is my personal website. Here you can explore my projects, check 
out some of my art-related work and other (kind of) interesting stuff.

<i>Have fun!</i>

<div class="os-quote-box">
  <p>"${quote.text}"</p>
  <p class="quote-sub">— ${quote.artist}, <i>${quote.song}</i> (${quote.year})</p>
</div>

<p class="secondary-text">Click a menu item or type a command below.</p>
<div class="menu-container">
  <button class="os-btn" data-command="about">[ About Me ]</button>
  <button class="os-btn" data-command="games">[ Games ]</button>
  <button class="os-btn" data-command="art">[ Art ]</button>
  <button class="os-btn" data-command="contact">[ Contact ]</button>
  <button class="os-btn" data-command="help">[ Help! ]</button>
</div>`;
  container.appendChild(content);
}


export function help(container: HTMLElement): void {
  const content = document.createElement('div');
  content.innerHTML = `
<b style="color:red;">STILL UNDER CONSTRUCTION, SO NOT EVERY OPTION IS AVAILABLE RIGHT NOW</b>

Usable commands:
<li>
cls
clear
about
games
art
contact
help
hello
quote
</li>
  `;
  container.appendChild(content);
}


export function aboutPage(container: HTMLElement): void {
  const content = document.createElement('div');
  content.innerHTML = `
<img src="public/isra.jpg" width=128>
<p>
My name is <b>Israel Arroyo</b> <span class="secondary-text">(also known in the internet as <b>Alter</b>)</span>

I'm a computer science student currently living in Mexico.

I've been developing videogames since i was 16. You can check some of them out on my <a href="https://alterwalrus.itch.io">Itch.io</a> 
or the <b>games</b> section of this site.
The frst game engine i ever used was GameMaker Studio and, although most of my first projects are 
private, some of the newest ones have been released on Itch.io (I also plan on posting my oldest games 
in here as a sort of archive too). The last game i made with GMS was "Cinco Noches con Alfredo", 
a Five Nights at Freddy's parody, a franchise i am a <b>huge</b> fan of.

Since 2024 i switched to Godot and it's now my favourite engine of them all.
In fact, pretty much all software i use is open-source: Godot, Blender, LMMS, Pixelorama, Piskel.
Even my day-to-day operating system is CachyOS.

<span class="secondary-text">I also tried Unity. I didn't like it.</span>

Aside from the technical standpoint of gamedev, which i really enjoy, I also thrive on the 
artistic side of things, particularly 2D, 3D art and music. Since i've been drawing all of my life 
i don't find 2D that much challenging. If anything, a bit boring sometimes. 3D, however, was something 
i wasn't even curious about, but by mere chance, i found that i liked it a lot. So, i've been practicing 
3D art for a couple of years now, including modelling, sculpting, texturing, rigging and animating.

Music, finally, is definitely one of the things in life i enjoy the most. I love writing music, analyzing
music theory in my favourite tunes and finding interesting things. Some of my most loved OSTs include:
Plants vs. Zombies, Pokémon, Earthbound, Undertale, Phoenix Wright and Baten Kaitos.
</p>
  `;
  container.appendChild(content);
}