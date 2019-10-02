// movable object
// https://github.com/HardlyDifficult/dcl-escape-room-tutorial/tree/master/03-trigger-complete/src/gameObjects



// 1941
const walls = new Entity()
engine.addEntity(walls)
walls.addComponent(new GLTFShape("models/building/walls/walls_131.gltf"))
walls.addComponent(new Transform({
    position: new Vector3(13.77, -1, 12.4)
}))


















// 1941
const year_1941 = new Entity()
engine.addEntity(year_1941)
year_1941.addComponent(new GLTFShape("models/rooms/1_1941_22.gltf"))
year_1941.addComponent(new Transform({
    position: new Vector3(13.77, -1, 12.4)
}))

// 1941
year_1941.addComponent(new Animator());
year_1941.getComponent(Animator).addClip(new AnimationState("out", { looping: false }))
year_1941.getComponent(Animator).addClip(new AnimationState("back", { looping: false }))
//const clip_show = new AudioClip('sound/educational_audio.mp3')
//const source_show = new AudioSource(clip_show)
//show_button_1.addComponent(source_show)
//show_button_1.getComponent(Animator).getClip("this_down").play();
let buttonOn_1941 = false
//source_show.playing = false
year_1941.getComponent(Animator).getClip("out").stop();
year_1941.getComponent(Animator).getClip("back").stop();
year_1941.addComponent(new OnClick(event =>{
    if (buttonOn_1941 == false){
        year_1941.getComponent(Animator).getClip("out").play();
        year_1941.getComponent(Animator).getClip("back").stop();
        //source_show.playing = true
        buttonOn_1941 = true
        log("IF BUTTON!")
    }
    else {
        year_1941.getComponent(Animator).getClip("back").play();
        year_1941.getComponent(Animator).getClip("out").stop();
        //source_show.playing = false
        buttonOn_1941 = false
        log("ELSE BUTTON!")
    }
}))





















// 1941
const year_1950 = new Entity()
engine.addEntity(year_1950)
year_1950.addComponent(new GLTFShape("models/rooms/2_1950_one.gltf"))
year_1950.addComponent(new Transform({
    position: new Vector3(13.77, -1, 12.4)
}))

//const clip_show = new AudioClip('sound/educational_audio.mp3')
//const source_show = new AudioSource(clip_show)
//show_button_1.addComponent(source_show)
// 1941
year_1950.addComponent(new Animator());
year_1950.getComponent(Animator).addClip(new AnimationState("out", { looping: false }))
year_1950.getComponent(Animator).addClip(new AnimationState("back", { looping: false }))
//show_button_1.getComponent(Animator).getClip("this_down").play();
let buttonOn_1950 = false
//source_show.playing = false

year_1950.getComponent(Animator).getClip("out").stop();
year_1950.getComponent(Animator).getClip("back").stop();

year_1950.addComponent(new OnClick(event =>{
    if (buttonOn_1950 == false){
        year_1950.getComponent(Animator).getClip("out").play();
        year_1950.getComponent(Animator).getClip("back").stop();

        //source_show.playing = true
        buttonOn_1950 = true
        log("IF BUTTON!")
    }
    else {
        year_1950.getComponent(Animator).getClip("back").play();
        year_1950.getComponent(Animator).getClip("out").stop();
        //source_show.playing = false
        buttonOn_1950 = false
        log("ELSE BUTTON!")
    }
}))













// 1951
const year_1951 = new Entity()
engine.addEntity(year_1951)
year_1951.addComponent(new GLTFShape("models/rooms/3_1951_two.gltf"))
year_1951.addComponent(new Transform({
    position: new Vector3(13.77, -1, 12.4)
}))

//const clip_show = new AudioClip('sound/educational_audio.mp3')
//const source_show = new AudioSource(clip_show)
//show_button_1.addComponent(source_show)
// 1941
year_1951.addComponent(new Animator());
year_1951.getComponent(Animator).addClip(new AnimationState("out", { looping: false }))
year_1951.getComponent(Animator).addClip(new AnimationState("back", { looping: false }))
//show_button_1.getComponent(Animator).getClip("this_down").play();
let buttonOn_1951 = false
//source_show.playing = false

year_1951.getComponent(Animator).getClip("out").stop();
year_1951.getComponent(Animator).getClip("back").stop();

year_1951.addComponent(new OnClick(event =>{
    if (buttonOn_1951 == false){
        year_1951.getComponent(Animator).getClip("out").play();
        year_1951.getComponent(Animator).getClip("back").stop();

        //source_show.playing = true
        buttonOn_1951 = true
        log("IF BUTTON!")
    }
    else {
        year_1951.getComponent(Animator).getClip("back").play();
        year_1951.getComponent(Animator).getClip("out").stop();
        //source_show.playing = false
        buttonOn_1951 = false
        log("ELSE BUTTON!")
    }
}))





































































// 1965
const year_1965 = new Entity()
engine.addEntity(year_1965)
year_1965.addComponent(new GLTFShape("models/rooms/4_1965.gltf"))
year_1965.addComponent(new Transform({
    position: new Vector3(13.77, -1, 12.4)
}))





//const clip_show = new AudioClip('sound/educational_audio.mp3')
//const source_show = new AudioSource(clip_show)
//show_button_1.addComponent(source_show)
// 1941
year_1965.addComponent(new Animator());
year_1965.getComponent(Animator).addClip(new AnimationState("out", { looping: false }))
year_1965.getComponent(Animator).addClip(new AnimationState("back", { looping: false }))
//show_button_1.getComponent(Animator).getClip("this_down").play();
let buttonOn_1965 = false
//source_show.playing = false

year_1965.getComponent(Animator).getClip("out").stop();
year_1965.getComponent(Animator).getClip("back").stop();

year_1965.addComponent(new OnClick(event =>{
    if (buttonOn_1965 == false){
        year_1965.getComponent(Animator).getClip("out").play();
        year_1965.getComponent(Animator).getClip("back").stop();

        //source_show.playing = true
        buttonOn_1965 = true
        log("IF BUTTON!")
    }
    else {
        year_1965.getComponent(Animator).getClip("back").play();
        year_1965.getComponent(Animator).getClip("out").stop();
        //source_show.playing = false
        buttonOn_1965 = false
        log("ELSE BUTTON!")
    }
}))
















// 1997_1
const year_1997 = new Entity()
engine.addEntity(year_1997)
year_1997.addComponent(new GLTFShape("models/rooms/5_1997.gltf"))
year_1997.addComponent(new Transform({
    position: new Vector3(13.77, -1, 12.4)
}))

//const clip_show = new AudioClip('sound/educational_audio.mp3')
//const source_show = new AudioSource(clip_show)
//show_button_1.addComponent(source_show)
// 1941
year_1997.addComponent(new Animator());
year_1997.getComponent(Animator).addClip(new AnimationState("out", { looping: false }))
year_1997.getComponent(Animator).addClip(new AnimationState("back", { looping: false }))
//show_button_1.getComponent(Animator).getClip("this_down").play();
let buttonOn_2017 = false
//source_show.playing = false

year_1997.getComponent(Animator).getClip("out").stop();
year_1997.getComponent(Animator).getClip("back").stop();

year_1997.addComponent(new OnClick(event =>{
    if (buttonOn_2017 == false){
        year_1997.getComponent(Animator).getClip("out").play();
        year_1997.getComponent(Animator).getClip("back").stop();

        //source_show.playing = true
        buttonOn_2017 = true
        log("IF BUTTON!")
    }
    else {
        year_1997.getComponent(Animator).getClip("back").play();
        year_1997.getComponent(Animator).getClip("out").stop();
        //source_show.playing = false
        buttonOn_2017 = false
        log("ELSE BUTTON!")
    }
}))


















// 2017_1
const year_2017 = new Entity()
engine.addEntity(year_2017)
year_2017.addComponent(new GLTFShape("models/rooms/6_2017.gltf"))
year_2017.addComponent(new Transform({
    position: new Vector3(13.77, -1, 12.4)
}))

//const clip_show = new AudioClip('sound/educational_audio.mp3')
//const source_show = new AudioSource(clip_show)
//show_button_1.addComponent(source_show)
// 1941
year_2017.addComponent(new Animator());
year_2017.getComponent(Animator).addClip(new AnimationState("out", { looping: false }))
year_2017.getComponent(Animator).addClip(new AnimationState("back", { looping: false }))
//show_button_1.getComponent(Animator).getClip("this_down").play();
let buttonOn_1997 = false
//source_show.playing = false

year_2017.getComponent(Animator).getClip("out").stop();
year_2017.getComponent(Animator).getClip("back").stop();

year_2017.addComponent(new OnClick(event =>{
    if (buttonOn_1997 == false){
        year_2017.getComponent(Animator).getClip("out").play();
        year_2017.getComponent(Animator).getClip("back").stop();

        //source_show.playing = true
        buttonOn_1997 = true
        log("IF BUTTON!")
    }
    else {
        year_2017.getComponent(Animator).getClip("back").play();
        year_2017.getComponent(Animator).getClip("out").stop();
        //source_show.playing = false
        buttonOn_1997 = false
        log("ELSE BUTTON!")
    }
}))



