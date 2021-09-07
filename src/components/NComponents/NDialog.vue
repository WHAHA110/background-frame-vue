
<template>
    <div class="NDialog">
        <el-dialog title="示例-dialog" :visible.sync="dialogTableVisible" :close-on-click-modal="false" append-to-body :width="dialogWidth" custom-class="NDialog">
            <!-- 表单提交 -->
            <template v-if="true">
                <div class="searchBox">
                    <N-form :formList="formList_" formHeigth="auto" formType="el-form-row" ref="N-form">
                        <div class="s-btn" slot="slot1">
                            <el-button size="mini" type="primary" @click="getList()">查 询</el-button>
                            <el-button size="mini">重 置</el-button>
                        </div>
                        <!-- <el-form-item label-width label="slot0" prop slot="slot0">
                            <el-input size="small" v-model="formFields_['xxx']" />
                        </el-form-item>-->
                    </N-form>
                </div>
            </template>
            <!-- 可编辑表格 -->
            <template v-if="dialogType==='editTable'">
                <div class="tableBox">
                    <el-table class="colInput" :data="tableList" :height="dialogHeigth" @current-change="handleCurrentChange" @selection-change="handleSelectionChange" stripe border highlight-current-row>
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column type="index" width="50" label="序号"></el-table-column>
                        <template v-for="(item ,idx) in tableThList">
                            <el-table-column :property="item.prop" :key="item.prop+idx" :label="item.label" min-width="180px" v-if="item.type==='INPUT'">
                                <template slot-scope="scope">
                                    <el-input size="small" v-model="scope.row[item.prop]" :placeholder="item.label" />
                                    <!-- <i class="el-icon-time"></i>
                                    <span style="margin-left: 10px">{{ scope.row.date }}</span>-->
                                </template>
                            </el-table-column>
                            <el-table-column show-overflow-tooltip :property="item.prop" :key="item.prop+idx" :label="item.label" min-width="180px" v-else></el-table-column>
                        </template>
                    </el-table>
                </div>

                <div class="bottomBox">
                    <el-pagination background layout="total, prev, pager, next, jumper" :total="1000"></el-pagination>
                    <div class="btns">
                        <el-button>默认按钮</el-button>
                        <el-button type="primary">主要按钮</el-button>
                    </div>
                </div>
            </template>

            <!-- 表单提交 -->
            <template v-if="dialogType==='form'">
                <N-form formHeigth="450px" :formType="formType" ref="N-form1">
                    <div class="s-btn" slot="slot1">
                        <el-button size="mini" type="primary" @click="getList()">主要按钮</el-button>
                        <el-button size="mini">默认按钮</el-button>
                    </div>
                </N-form>
                <div class="commitBox">
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <!-- <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>-->
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import { NDialogData } from './NData.js'
import NForm from './NForm.vue'
export default {
    name: 'NDialog',
    components: { NForm },
    props: {
        dialogType: {
            type: String,
            default: 'form'
        },
        dialogWidth: {
            type: String,
            default: '990px'
        },
        dialogHeigth: {
            type: String,
            default: '450px'
        },
        formType: {
            type: String,
            default: 'el-form-row'
        }
    },
    data() {
        return {
            dialogTableVisible: false,
            tableList: NDialogData.tableList,
            tableThList: NDialogData.tableThList,
            formList_: NDialogData.formList_
        }
    },
    methods: {
        openNDialog() {
            this.dialogTableVisible = true
        },
        handleCurrentChange(a1, a2) {
            console.log(a1, a2)
        },
        handleSelectionChange(a1, a2) {
            console.log(a1, a2)
        }
    }
}
</script>
<style lang="scss">
.NDialog.el-dialog {
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-dialog__body {
        padding-top: 0;
    }
}

.NDialog .el-dialog__body {
    padding-top: 0px;
    // padding-bottom: 20px;
}
</style>
<style lang="scss" scoped>
::v-deep.searchBox {
    display: flex;
    .el-form-row {
        justify-content: flex-start;
    }

    .el-form-item {
        width: 19%;
        max-width: 325px;
        min-width: 258px;
        margin-left: 9px;
        margin-bottom: 0px;
        overflow: hidden;
        display: flex;
        margin-bottom: 3px;
        .el-form-item__label,
        .el-form-item__content {
            height: 32px;
            line-height: 32px;
        }
        .el-form-item__label {
            display: inline-block;
            font-size: 12px;
            width: 78px !important;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-right: 4px;
            // text-align: right;
        }
        .el-form-item__content {
            flex: 1;
            margin-left: 0px;
        }
    }

    .s-btn {
        display: flex;
        align-items: center;
        margin-left: 16px;
        margin-bottom: 3px;
    }
}

::v-deep.tableBox {
    .el-table td,
    .el-table th {
        font-size: 12px;
        padding: 5px 0;
    }
}
::v-deep.bottomBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    ::v-deep.btns {
        display: flex;
        justify-content: flex-end;
        // margin-top: 15px;
    }
}
// ::v-deep.colInput {
//     input {
//         border: none;
//         background: rgb(255, 208, 80);
//     }
// }

::v-deep.commitBox {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
}
</style>

