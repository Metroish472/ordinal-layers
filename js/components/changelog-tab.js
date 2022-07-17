Vue.component("changelog-tab", {
    template: `<div class="changelog-tab">
    <guide-item>
    <template v-slot:title>vα</template>
    <template v-slot:text>First pre-release
    </template>
    </guide-item>
    <guide-item>
    <template v-slot:title>vβ</template>
    <template v-slot:text>Finished all 200 symbols for ordinal levels!
    </template>
    </guide-item>
    <guide-item>
    <template v-slot:title>vβ.1</template>
    <template v-slot:text>Changed most of the remaining text needed
    </template>
    </guide-item>
    <guide-item>
    <template v-slot:title>v1.0.0</template>
    <template v-slot:text>The first release is published!
    </template>
    </guide-item>
    <guide-item>
    <template v-slot:title>v1.0.0.1</template>
    <template v-slot:text>Fixed the screen not loading the engine
    </template>
    </guide-item>
    <guide-item>
    <template v-slot:title>v1.0.1.0</template>
    <template v-slot:text>Added more achievements to the engine
    </template>
    </guide-item>
</div>`
})
