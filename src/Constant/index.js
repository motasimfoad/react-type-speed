const randomText = () =>{

    const text = [
        "After some months, it was time for farming and the farmer was already old and weak and can't dig the ground anymore so the old farmer wrote this letter to his son in prison. Son, this year I will not plant cassava and yam because I cant dig the field, I know if you were here you would have helped me." ,
        "In a certain village lived a farmer and his only son. The SON was a thief who goes about stealing from people’s homes. He continued this wicked lifestyle till the day his cup got filled. He stole heavy some of money from the richest man in their village, that day he didn’t escape successfully as he used to." ,
        "They’ll call her Big Bertha, they’ll cover her skin with paintings of pinup girls that you will finger-trace in bed, tell her they’re not like us anyway, tell her they’ll never see you coming, and she will roll away from you in bed at night, cold back to you, tears shimmering metallic in the moonlight.",
        "She woke to news of another stalemate, more children dying on the border, mounting humanitarian crises overseas, and a small mass in her breast. She made her tea, took deep breaths, cried, and set about her day. Friends and colleagues wanted to argue politics, climate change, gun control, and if we were entering the apocalypse.",
        "The tallest palm on the atoll lost its fronds long before falling. King tides and storm surges had breached the walls, poisoned it with salt. A death before death, like my father’s dementia. Ghost trees, we called them. Dead zones of headless palms stood everywhere, resembling broken marble columns. And when the last typhoon came through, it took our giant.",
        "It took the gazebo, first, the one on the beach where we used to picnic, the one where we’d made our baby on a crickety night. It flipped our neighbors’ boats, flattened the school, then came for our roof. It screamed above as we bowed our heads and scrambled for shelter. It smashed the bed where our little girl had slept.",
        "A boy stands knee-deep on heron-thin legs, stung skin numbing now, as stars prick creek water sliding slow, slow beneath him. Across the meadow, his house is burning.When he finally looks up — having almost outrun the sound of the front porch door banging like a rifle shot behind—flames illuminate the rope swing he’s just flown past and thick smoke billows into a harvest moon.",    
        "In May I tilled the garden, so swept up in the work that I churned beyond the boundaries of Grandma’s old plot into rocky soil where a dead maple had recently been removed. An animal, I said, when the tiller turned up bones. A beloved pet. Then the skull, silver crowns glinting in its jaw.",
        "I knelt. “Hello. I’m your granddaughter, Alice. We’ve never met, but your wife left me this house.” Mute bone. A hard man, cruel, I’d been told, who’d abandoned his bewildered family. The sunflowers I planted there flourished. They don’t need kind soil to grow strong.",
    ]

    return text[Math.floor(Math.random()*text.length)];
    } 



export {
    randomText,
};