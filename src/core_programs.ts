export function homePage(container: HTMLElement): void {
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
<div>Welcome to AlterOS!</div>
<p class="secondary-text">Click a menu item or type a command below.</p>
<div class="menu-container">
  <button class="os-btn" data-command="about">[ About Me ]</button>
  <button class="os-btn" data-command="games">[ My Games ]</button>
  <button class="os-btn" data-command="art">[ My Art ]</button>
  <button class="os-btn" data-command="help">[ System Help ]</button>
</div>`;
  container.appendChild(content);
}


//TODO: implement the rest of this shit