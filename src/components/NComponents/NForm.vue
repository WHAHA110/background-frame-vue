<template>
    <div class="submitForm">
        <!-- <N-dialog dialogType="table" ref="N-dialog"></N-dialog> -->
        <div :style="{'height':formHeigth}">
            <el-form id="my-form" ref="form" :model="formFields" :rules="rules" label-width :class="[formType]">
                <template v-for="(item,idx) in formList">
                    <!--INPUT-->
                    <el-form-item label-width :label="item.label" :key="item.prop+idx" prop v-if="item.vIf&&item.type==='INPUT'">
                        <el-input size="small" v-model="formFields[item.prop]" :placeholder="item.label" :disabled="item.vCantInput" />
                    </el-form-item>
                    <!--TEXTAREA-->
                    <el-form-item label-width :label="item.label" :key="item.prop+idx" prop v-if="item.vIf&&item.type==='TEXTAREA'">
                        <el-input type="textarea" :rows="3" v-model="formFields[item.prop]" :placeholder="item.label" :disabled="item.vCantInput" style="width: 100%" />
                    </el-form-item>

                    <!--OPTIONS-->
                    <el-form-item label-width :label="item.label" :key="item.prop+idx" prop v-if="item.vIf&&item.type==='OPTIONS'">
                        <el-select size="small" v-model="formFields[item.prop]" :placeholder="item.label" :disabled="item.vCantInput" style="width: 100%" @change="SELECT_FUN(idx,item.prop)">
                            <el-option v-for="(dict,index) in verificationtypeList" :key="index" :label="dict.name" :value="dict.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <!--DIC-->
                    <el-form-item label-width :label="item.label" :key="item.prop+idx" prop v-if="item.vIf&&item.type==='DIC'">
                        <el-select size="small" v-model="formFields[item.prop]" :placeholder="item.label" :disabled="item.vCantInput" style="width: 100%" @change="SELECT_FUN(idx,item.prop)">
                            <el-option v-for="(dict,index) in verificationtypeList" :key="index" :label="dict.name" :value="dict.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <!--LIST-->
                    <el-form-item class="cursor" label-width :label="item.label" :key="item.prop+idx" prop v-if="item.vIf&&item.type==='LIST'">
                        <el-input v-model="formFields[item.prop]" size="small" suffix-icon="el-icon-more" :placeholder="item.label" @click.native="OPEN_FUN(idx,item.prop)" disabled></el-input>
                    </el-form-item>

                    <!--DATE-->
                    <el-form-item label-width :label="item.label" :key="item.prop+idx" prop v-if="item.vIf&&item.type==='DATE'">
                        <el-date-picker clearable :picker-options="pickerOptions" size="small" style="width: 100%" v-model="formFields[item.prop]" :type="item.secondaryType||'date'" :value-format="item.format" :placeholder="item.label" :disabled="item.vCantInput"></el-date-picker>
                    </el-form-item>

                    <!--SLOT-->
                    <slot :name="item.prop" v-if="item.vIf&&item.type==='SLOT'">{{'SLOTNAME:'+item.prop}}</slot>
                </template>
            </el-form>
        </div>
    </div>
</template>

<script>
import { NFormData, randowText } from './NData.js'

// import NDialog from "./NDialog.vue";

export default {
    name: 'NForm',
    components: {
        // NDialog,
    },
    props: {
        formType: {
            //表格纵向或横向
            type: String,
            default: 'el-form-row'
        },
        formHeigth: {
            //表格高度
            type: String,
            default: '450px'
        },
        rules: {
            //校验规则
            type: Object,
            default: function () {
                return {}
            }
        },
        formList: {
            //表单内容
            type: Array,
            default: function () {
                return NFormData.formList
            }
        }
    },
    data() {
        return {
            formFields: {
                ccc: randowText(),
                ttt: '2055-02-02',
                woo: 2
            },
            pickerOptions: [],
            verificationtypeList: []
        }
    },
    watch: {
        // 显示隐藏 表单字段
        // "formFields.woo"() {
        //     console.log(this.formFields.woo, "this.formFields.woo");
        //     if (this.formFields.woo === 3) {
        //         this.formList[2].vIf = false;
        //     }
        //     console.log(this.formList[2]);
        // },
    },
    mounted() {
        setTimeout(() => {
            this.formFields.woo = 3
            console.log(this.formFields.woo, 'this.formFields.woo 0')
        }, 2000)
    },
    methods: {
        SELECT_FUN(idx, prop) {
            // console.log(a1, a2, this.$refs);
            // this.$refs["N-dialog"].openNDialog();
        },
        OPEN_FUN(idx, prop) {
            console.log(idx, prop, this.$parents)
            this.$parent.$refs['N-dialog3'].openNDialog()
        },
        getformFields(a1, a2) {
            return this.formFields
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep * {
    font-size: 12px !important;
}
::v-deep.el-form-col {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: flex-start;
    overflow: auto;
    .el-form-item__label {
        display: inline-block;
        font-size: 12px;
        // width: 80px !important;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 3px;
        text-align: left;
    }
}
::v-deep.el-form-row {
    height: 100%;
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    .el-form-item__label {
        display: inline-block;
        font-size: 12px;
        width: 98px !important;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 7px;
        text-align: left;
    }
}
::v-deep.el-form-item {
    //  添加数据表单  搜索栏表单样式可复写样式；
    display: flex;
    width: 368px;
    margin-left: 9px;
    margin-bottom: 3px;
    .el-form-item__label {
        display: inline-block;
        font-size: 12px;
        width: 89px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 4px;
        text-align: left;
    }
    .el-form-item__content {
        flex: 1;
        margin-left: 0px;
    }
    .el-textarea {
        font-size: 12px;
    }
}
::v-deep.cursor {
    cursor: default;
    .el-input.is-disabled .el-input__inner {
        cursor: default;
    }
    input:disabled {
        cursor: default;
    }
}
</style>
