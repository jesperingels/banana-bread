import Content2Column from '../components/Content2Column'

export default function Main (props) {
    return(
        <main>
           <Content2Column 
           src='/img/4527-3-large.jpg' 
           text='I’ve received a lot of questions about freezing banana bread since I published the recipe, so let me share what works. You can freeze banana bread using these instructions to preserve its fresh flavor and texture for months!
           Cool baked banana bread completely.
            Tightly wrap the loaf or slices (individually or grouped) in 2-3 layers of plastic wrap or aluminum foil.
            Place wrapped banana bread in a large freezer-friendly storage bag or reusable container.
            Date the bag and freeze for up to 3-4 months. Thaw wrapped or unwrapped in the refrigerator or at room temperature. All methods work like a charm!
            I like to freeze banana bread in slices because the slices thaw much quicker– even by lunchtime!'
            title="Whole-Grain Banana Bread"
            subtitle1="Prep"
            subtext1="10 mins"
            subtitle2="Bake"
            subtext2="1hr to 1hr 15mins"
            subtitle3="Total"
            subtext3="1hr 10mins"
            subtitle4="Yield"
            subtext4="1 loaf, 12 generous servings"
            
            />
        <style jsx>
            {`
                grid-column: 1/3;
            `}
        </style>
        </main>
    )
}