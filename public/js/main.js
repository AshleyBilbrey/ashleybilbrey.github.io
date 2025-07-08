function emojiSwap(object) {
    const plants = ["🌻", "🪻", "🌹", "🌷", "🌼", "🌺", "🍀"];
    const earths = ["🌎", "🌏", "🌍"]

    switch(object.text) {
        case "💜":
            object.text = "🌰"
            object.setAttribute("title", "Click to add water! 💧");
            break;
        case "🌰":
            object.text = "🌱"
            object.setAttribute("title", "Click to add sun! ☀️");
            break;
        default:
            object.text = plants[Math.floor(Math.random() * plants.length)];
            object.setAttribute("title", "You grew a plant! " + earths[Math.floor(Math.random() * earths.length)]);
    }

}