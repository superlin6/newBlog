<template>
	<div class="beehive">
		<ul id="hexGrid">
			<li class="hex" v-for="(item, index) in data.picLists" :key="index">
				<a class="hexIn" :href="item.link">
					<el-image :src="item.imgUrl" alt="" lazy >
						<template #placeholder>
							<el-image :src="item.imgUrl" />
						</template>
					</el-image>
					<h1>{{ item.title }}</h1>
					<p>{{ item.text }}</p>
				</a>
			</li>
			<li class="hex" v-for="(item, index) in data.picLists" :key="index">
				<a class="hexIn" :href="item.link">
					<el-image :src="item.imgUrl" alt="" lazy />
					<h1>{{ item.title }}</h1>
					<p>{{ item.text }}</p>
				</a>
			</li>
			<li class="hex" v-for="(item, index) in data.picLists" :key="index">
				<a class="hexIn" :href="item.link">
					<el-image :src="item.imgUrl" alt="" lazy />
					<h1>{{ item.title }}</h1>
					<p>{{ item.text }}</p>
				</a>
			</li>
			<li class="hex" v-for="(item, index) in data.picLists" :key="index">
				<a class="hexIn" :href="item.link">
					<el-image :src="item.imgUrl" alt="" lazy />
					<h1>{{ item.title }}</h1>
					<p>{{ item.text }}</p>
				</a>
			</li>
			<li class="hex" v-for="(item, index) in data.picLists" :key="index">
				<a class="hexIn" :href="item.link">
					<el-image :src="item.imgUrl" alt="" lazy />
					<h1>{{ item.title }}</h1>
					<p>{{ item.text }}</p>
				</a>
			</li>
			<li class="hex" v-for="(item, index) in data.picLists" :key="index">
				<a class="hexIn" :href="item.link">
					<el-image :src="item.imgUrl" alt="" lazy />
					<h1>{{ item.title }}</h1>
					<p>{{ item.text }}</p>
				</a>
			</li>
			<li class="hex" v-for="(item, index) in data.picLists" :key="index">
				<a class="hexIn" :href="item.link">
					<el-image :src="item.imgUrl" alt="" lazy />
					<h1>{{ item.title }}</h1>
					<p>{{ item.text }}</p>
				</a>
			</li>
			<li class="hex" v-for="(item, index) in data.picLists" :key="index">
				<a class="hexIn" :href="item.link">
					<el-image :src="item.imgUrl" alt="" lazy />
					<h1>{{ item.title }}</h1>
					<p>{{ item.text }}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { reactive } from "@vue/reactivity";
export default {
	setup() {
		const data = reactive({
			picLists: [
				{
					imgUrl: '/img/2.jpeg',
					title: 'title2',
					link: '#',
					text: 'text2',
				},
				{
					imgUrl: '/img/3.jpeg',
					title: 'title3',
					link: '#',
					text: 'text3',
				},
				{
					imgUrl: '/img/4.jpeg',
					title: 'title4',
					link: '#',
					text: 'text4',
				},
			],
		});

		return {
			data,
		};
	},
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: rgba(35, 35, 35, 100%);
}

#hexGrid {
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    padding: 0.866% 0;
    font-family: "Raleway", sans-serif;
    font-size: 15px;
}

#hexGrid::after {
    content: "";
    display: block;
    clear: both;
}

.hex {
    position: relative;
    list-style-type: none;
    float: left;
    overflow: hidden;
    visibility: hidden;
    outline: 1px solid transparent;

    /* fix for jagged edges in FF on hover transition */
    transform: rotate(-60deg) skewY(30deg) translateZ(-1px);
}

.hex * {
    position: absolute;
    visibility: visible;
    outline: 1px solid transparent;

    /* fix for jagged edges in FF on hover transition */
}

.hexIn {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    transform: skewY(-30deg) rotate(60deg);
}

/*** HEX CONTENT **********************************************************************/
.hex .el-image,
:deep(.hex) .el-image img {
    left: -100%;
    right: -100%;
    width: auto;
    height: 100%;
    margin: 0 auto;
}

.demo-image__placeholder.image-slot {
    position: relative;
    z-index: 200;
    left: -100%;
    right: -100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: red;
    color: var(--el-text-color-secondary);
    font-size: 14px;
}

.demo-image__placeholder .dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
}

.hex h1,
.hex p {
    width: 102%;
    left: -1%;

    /* prevent line on the right where background doesn't cover image */
    padding: 5%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 80%);
    font-weight: 300;
    transition: -webkit-transform 0.2s ease-out, opacity 0.3s ease-out;
    transition: transform 0.2s ease-out, opacity 0.3s ease-out;
}

.hex h1 {
    bottom: 50%;
    padding-top: 50%;
    font-size: 1.5em;
    z-index: 1;
    transform: translateY(-100%) translateZ(-1px);
}

.hex h1::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 45%;
    width: 10%;
    text-align: center;
    border-bottom: 1px solid #fff;
}

.hex p {
    top: 50%;
    padding-bottom: 50%;
    transform: translateY(100%) translateZ(-1px);
}

/*** HOVER EFFECT  **********************************************************************/
.hexIn:hover h1,
.hexIn:focus h1,
.hexIn:hover p,
.hexIn:focus p {
    transform: translateY(0%) translateZ(-1px);
}

/*** SPACING AND SIZING *****************************************************************/
@media (min-width: 1201px) {
    /* <- 5-4  hexagons per row */
    .hex {
        width: 19.2%;

        /* = (100-4) / 5 */
        padding-bottom: 22.17%;

        /* =  width / sin(60deg) */
    }

    .hex:nth-child(9n + 6),
    .hex:nth-child(9n + 7),
    .hex:nth-child(9n + 8),
    .hex:nth-child(9n + 9) {
        margin-top: -4.676%;
        margin-bottom: -4.676%;
        transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }

    .hex:nth-child(9n + 6):last-child,
    .hex:nth-child(9n + 7):last-child,
    .hex:nth-child(9n + 8):last-child,
    .hex:nth-child(9n + 9):last-child {
        margin-bottom: 0;
    }

    .hex:nth-child(9n + 6) {
        margin-left: 0.5%;
        clear: left;
    }

    .hex:nth-child(9n + 10) {
        clear: left;
    }

    .hex:nth-child(9n + 2),
    .hex:nth-child(9n + 7) {
        margin-left: 1%;
        margin-right: 1%;
    }

    .hex:nth-child(9n + 3),
    .hex:nth-child(9n + 4),
    .hex:nth-child(9n + 8) {
        margin-right: 1%;
    }
}

@media (max-width: 1200px) and (min-width: 901px) {
    /* <- 4-3  hexagons per row */
    .hex {
        width: 24.25%;

        /* = (100-3) / 4 */
        padding-bottom: 28.001%;

        /* =  width / sin(60deg) */
    }

    .hex:nth-child(7n + 5),
    .hex:nth-child(7n + 6),
    .hex:nth-child(7n + 7) {
        margin-top: -6.134%;
        margin-bottom: -6.134%;
        transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }

    .hex:nth-child(7n + 5):last-child,
    .hex:nth-child(7n + 6):last-child,
    .hex:nth-child(7n + 7):last-child {
        margin-bottom: 0;
    }

    .hex:nth-child(7n + 2),
    .hex:nth-child(7n + 6) {
        margin-left: 1%;
        margin-right: 1%;
    }

    .hex:nth-child(7n + 3) {
        margin-right: 1%;
    }

    .hex:nth-child(7n + 8) {
        clear: left;
    }

    .hex:nth-child(7n + 5) {
        clear: left;
        margin-left: 0.5%;
    }
}

@media (max-width: 900px) and (min-width: 601px) {
    /* <- 3-2  hexagons per row */
    .hex {
        width: 32.666%;

        /* = (100-2) / 3 */
        padding-bottom: 37.72%;

        /* =  width / sin(60) */
    }

    .hex:nth-child(5n + 4),
    .hex:nth-child(5n + 5) {
        margin-top: -8.564%;
        margin-bottom: -8.564%;
        transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }

    .hex:nth-child(5n + 4):last-child,
    .hex:nth-child(5n + 5):last-child {
        margin-bottom: 0;
    }

    .hex:nth-child(5n + 4) {
        margin-right: 1%;
        margin-left: 0.5%;
    }

    .hex:nth-child(5n + 2) {
        margin-left: 1%;
        margin-right: 1%;
    }

    .hex:nth-child(5n + 6) {
        clear: left;
    }
}

@media (max-width: 600px) {
    /* <- 2-1  hexagons per row */
    .hex {
        width: 49.5%;

        /* = (100-1) / 2 */
        padding-bottom: 57.158%;

        /* =  width / sin(60) */
    }

    .hex:nth-child(3n + 3) {
        margin-top: -13.423%;
        margin-bottom: -13.423%;
        transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }

    .hex:nth-child(3n + 3):last-child {
        margin-bottom: 0;
    }

    .hex:nth-child(3n + 3) {
        margin-left: 0.5%;
    }

    .hex:nth-child(3n + 2) {
        margin-left: 1%;
    }

    .hex:nth-child(3n + 4) {
        clear: left;
    }
}

@media (max-width: 400px) {
    #hexGrid {
        font-size: 13px;
    }
}
</style>