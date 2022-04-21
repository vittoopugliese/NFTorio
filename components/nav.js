const header = document.querySelector('header');
header.innerHTML = `
<nav>
<a href="../index.html" id="isologotipo"></a>
<button id="mask" onclick="connect()" type="button">
    <img draggable="false" src="../imgs/svgs/metamask.svg" alt="metamask-connect-button" style="height: 2.5em;width: 2.5em;user-select: none;">
</button>
<div id="nav-links">
    <ul>
        <li><a href="../pages/images.html">Images</a></li>
        <li><a href="../pages/music.html">Music</a></li>
    </ul>
</div>
</nav>
`