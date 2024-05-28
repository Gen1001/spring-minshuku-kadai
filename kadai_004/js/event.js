$(window).on("load scroll", (e) => {
    if (e.type === "load") {
        console.log("loadイベントが発生しました");
    } else if (e.type === "scroll") {
        console.log("scrollイベントが発生しました");
    }
});