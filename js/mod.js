var mod = {
    primaryName: "Ordinal",
    secondaryName: "-Layers",
    version: "v0.1",
    engineVer: "0.2.3 P1", //DO NOT MODIFY
    debugMode: true,
    themes: [
        ["Dark", "css/themes/dark.css"],
        ["Light (Legacy)", "https://veprogames.github.io/omega-layers/css/main.css"],
        ["Neon", "css/themes/neon.css"],
        ["Godot Blue", "css/themes/darkblue.css"],
        ["Halloween", "css/themes/spooky.css"],
        ["eXPerience", "css/themes/experience.css"]
    ],
    layerNames: [
        ["Ordinal-Layers",
        [
            "+×^#≬,[⊑□&⋱¬♦₁RεωΩxX(.A/⽥θᔦˣÇƱ⊞⊗○UꙌ☉ƒ‡ῼὯΨⓍͳ֍E⍰OP␠₱•ρ—⋻⊖₣⊕៳лｃດ&⬲:△㎙已☐・⍏ヘキ⟴þŌ刁口○ብჲユ一௫个Ң⊂ᑂಉ✫☆◻⋲る১▵ᗜᗚᗌ⋑⟡悤ⱵB℺⋃πΠ♻⦽◎|⤄⧭√∢∏∐∫∑⊖⊠⟅❃☾⟁㎁!ල⊝⋂÷▨∮◬Vᚖ⧈▥◒⑫③④❹Φ▩❖×᛭☩◨⋀ჯф〉ተDع尸ϝ⬓⨎⛎㎋α↓µTNI⯐Я∀aቄⅠιѺ◴ᎧकrL€ѨσœΘ∱⨑ख~ↈ⤽ᑕᗏ⭅∋⚫Э⛋",
            "𒀆𒀈𒀘",
            ["<span class='flipped-v'>∾</span>", "<span class='flipped-v'>∾</span><sup>2</sup>","<span class='flipped-v'>∾</span><sup>3</sup>","<span class='flipped-v'>∾</span><sup>2<sup>2</sup></sup>"]
        ]]
    ],
    fonts: [
        ["Roboto", "css/fonts/roboto.css"],
    ],
    saves: [
        ["Save 1", ""],
        ["Save 2", "2"],
        ["Save 3", "3"],
        ["Save 4", "4"],
    ],
    debugClasses: []
}

//DO NOT MODIFY CODE PAST THIS POINT AS IT IS NEEDED (unless your a pro coder then do some experimenting)

mod.layerNames.push(["Refresh Names", "refresh"])

document.getElementById("superImportantTitle").innerHTML = "<span class='omega'>"+mod.primaryName+"</span>"+mod.secondaryName
