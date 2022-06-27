Vue.component("news-ticker", {
    data: function()
    {
        return {
            messages: [
                "Numbers 0 to THE END!!!",
                "reminder to fix anything i forgor",
                "aaaaaaaaaaaaaaaaaaaaaaaaa",
                "Subscribe to Metroish Productions Inc.: https://www.youtube.com/c/MetroishProductionsInc",
                "Shoutout to NO! and Mathis R.V. for the inspiration",
                "so anyways i found out that after OL(200) things go really crazy...patience patience",
                "This is one of the first idle games to increment in Ordinal Levels!",
                "ey where Super Ordinal Level",
                "If you don't know what's going on, watch 0 to ENDLESS for almost all of the Ordinal Levels",
                "help i need idea for a news ticker"
            ],
            currentMessage: "",
            messageIndex: -1
        }
    },
    computed: {
        animationDuration: function()
        {
            return 10 + 0.1 * this.currentMessage.replace(/<.*?>/g, "").length;
        }
    },
    methods: {
        getMessage: function()
        {
            const arr = Array.from(this.messages);
            if(this.messageIndex !== -1)
            {
                arr.splice(this.messageIndex, 1);
            }
            const index = Math.floor(Math.random() * arr.length);
            this.messageIndex = index;
            const element = arr[index];
            this.currentMessage = typeof element === "string" ? element : element();
        }
    },
    mounted: function()
    {
        this.getMessage();
        this.$refs.message.onanimationiteration = e =>
        {
            const anim = this.$refs.message.style.animation.slice();
            this.getMessage();
            this.$refs.message.style.animation = "none";
            void this.$refs.message.offsetWidth; //very black magic
            this.$refs.message.style.animation = anim;
            Vue.nextTick(() =>
            {
                if(this.$refs.message.style.animationDuration === "")
                {
                    this.$refs.message.style.animationDuration = this.animationDuration + "s";
                }
            });
        };
    },
    template: `<div class="news-ticker">
    <span ref="message" :style="{'animation-duration': animationDuration + 's'}" v-html="currentMessage"></span>
</div>`
})
