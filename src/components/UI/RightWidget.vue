<template>
  <div class="RightWidget">
        <div class="RightWidgetContainer">
            <div class="RightWidgetCard">
                <div class="RightWidgetCardTitle">
                    Search here
                </div>
                <div class="RightWidgetCardDescription">
                    In this website you can search for any npm packages you want. Just type in the searching place your necessary npm package and get what you want!
                </div>
            </div>
            <div class="RightWidgetCard">
                <div class="RightWidgetCardTitle">
                    About back-end
                </div>
                <div class="RightWidgetCardDescription">
                    May be you wondering, from where are these whole packages gets?! 
                    Of course, that is the <code>npm registry packages</code>, 
                    which are json APIs from <a href='https://registry.npmjs.org'>registry.npmjs.org</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'right-widget'
}
</script>

<style scoped>
.RightWidget {
    width: 300px;
    position: absolute;
    top: 160px;
    right: 50px;
    overflow-x: hidden;
    padding: 8px 0;
}

.RightWidgetContainer {
    display: block;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 12px;
}

.RightWidgetCard {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    margin-bottom: 30px;
    background-color: #d1d1d1;
    border-radius: 10px;
    min-height: 250px;
}

.RightWidgetCardTitle {
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
}

.RightWidgetCardDescription {
    margin-top: 20px;
}

@media screen and (max-width: 1200px) {
    .RightWidget {
      display: none;
    }
  }
</style>