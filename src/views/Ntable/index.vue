
<template>
    <div class="NTable">
        <!-- 弹框 -->
        <N-dialog dialogType="form" ref="N-dialog1" formType="el-form-row"></N-dialog>
        <N-dialog dialogType="form" ref="N-dialog2" formType="el-form-col"></N-dialog>
        <N-dialog dialogType="editTable" ref="N-dialog3"></N-dialog>
        <!-- 表单提交 -->
        <template v-if="contentArr.includes('form')">
            <div class="searchBox">
                <N-form :formList="formList_" formHeigth="auto" formType="el-form-row" ref="N-form">
                    <div class="s-btn" slot="slot1">
                        <el-button size="mini" type="primary" @click="getList()">查 询</el-button>
                        <el-button size="mini">重 置</el-button>
                    </div>
                    <el-form-item label-width label="slot0" prop slot="slot0">
                        <el-input size="small" v-model="formFields_['xxx']" />
                    </el-form-item>
                </N-form>
            </div>
        </template>
        <template v-if="contentArr.includes('btns')">
            <div class="operateBox btns">
                <el-button size="mini" @click="$refs['N-dialog1'].openNDialog()">默认按钮</el-button>
                <el-button size="mini" type="primary" @click="$refs['N-dialog2'].openNDialog()">主要按钮</el-button>
                <el-button size="mini" type="success" @click="$refs['N-dialog3'].openNDialog()">成功按钮</el-button>
                <el-button size="mini" type="info">信息按钮</el-button>
                <el-button size="mini" type="warning">警告按钮</el-button>
                <el-button size="mini" type="danger">危险按钮</el-button>
            </div>
        </template>
        <!-- 可编辑表格 -->
        <template v-if="contentArr.includes('tags')">
            <div class="tagsBox">
                <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
                    <el-tab-pane label="可编辑表格" name="tags1"></el-tab-pane>
                    <el-tab-pane label="可编辑表单 row" name="tags2"></el-tab-pane>
                    <el-tab-pane label="可编辑表单 col" name="tags3"></el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="tags4"></el-tab-pane>
                </el-tabs>
            </div>
        </template>
        <!-- 可编辑表格 -->
        <template v-if="contentArr.includes('editTable')&&activeName==='tags1'">
            <div class="tableBox">
                <el-table class="colInput" :data="tableList" :height="dialogHeigth" @current-change="handleCurrentChange" @selection-change="handleSelectionChange" stripe border highlight-current-row>
                    <el-table-column align="center" type="selection" width="55"></el-table-column>
                    <el-table-column align="center" type="index" width="50" label="序号"></el-table-column>
                    <template v-for="(item ,idx) in tableThList">
                        <el-table-column align="center" :property="item.prop" :label="item.label" min-width="180" v-if="item.type==='INPUT'">
                            <template slot-scope="scope">
                                <el-input size="small" v-model="scope.row[item.prop]" :placeholder="item.label" />
                                <!-- <i class="el-icon-time"></i>
                                <span style="margin-left: 10px">{{ scope.row.date }}</span>-->
                            </template>
                        </el-table-column>
                        <el-table-column align="center" show-overflow-tooltip :property="item.prop" :label="item.label" min-width="180" v-else>
                            <el-table-column align="center" show-overflow-tooltip :property="sub_item.prop" :label="sub_item.label" min-width="180" v-for="(sub_item ,sub_idx) in item.subTh" :key="sub_item.label"></el-table-column>
                        </el-table-column>
                    </template>
                </el-table>
            </div>
            <!-- 分页栏 -->
            <div class="pageBox" v-if="contentArr.includes('page')">
                <el-pagination background layout="total, prev, pager, next, jumper" :total="1000"></el-pagination>
            </div>
        </template>
        <!-- 可编辑表单 row-->
        <template v-if="contentArr.includes('tagsFormRow')&&activeName==='tags2'">
            <div style="padding:10px 0">
                <N-form formHeigth formType="el-form-row" ref="N-form1">
                    <div class="s-btn" slot="slot1">
                        <el-button size="mini" type="primary" @click="getList()">主要按钮</el-button>
                        <el-button size="mini">默认按钮</el-button>
                    </div>
                </N-form>
            </div>
        </template>
        <!-- 可编辑表单 col-->
        <template v-if="contentArr.includes('tagsFormCol')&&activeName==='tags3'">
            <div style="padding:10px 0">
                <N-form formHeigth="700px" formType="el-form-col" ref="N-form1">
                    <div class="s-btn" slot="slot1">
                        <el-button size="mini" type="primary" @click="getList()">主要按钮</el-button>
                        <el-button size="mini">默认按钮</el-button>
                    </div>
                </N-form>
            </div>
        </template>
    </div>
</template>
    </div>
</template>

<script>
import { NTableData, randowText } from './NData.js'
import NForm from '@/components/NComponents/NForm.vue'
import NDialog from '@/components/NComponents/NDialog.vue'
export default {
    name: 'NTable',
    components: {
        NForm,
        NDialog
    },
    props: {
        contentArr: {
            type: Array,
            default: function () {
                return ['form', 'btns', 'tags', 'editTable', 'page', 'tagsFormRow', 'tagsFormCol']
            }
        },
        dialogWidth: {
            type: String,
            default: '950px'
        },
        dialogHeigth: {
            type: String,
            default: '750px'
        }
    },
    created() {
        // setTimeout(() => {
        //     this.formList_[2].vIf = false;
        // }, 3000);
    },
    data() {
        return {
            activeName: 'tags1',
            formFields_: {
                xxx: randowText(),
                woo: 2
            },
            dialogTableVisible: false,
            formList_: NTableData.formList_,
            tableList: NTableData.tableList,
            tableThList: NTableData.tableThList
        }
    },
    methods: {
        handleClick(log) {
            console.log(log, '----------------->log')
        },
        getList(log) {
            console.log(log, '----------------->log')

            let data1 = this.formFields_
            let data2 = this.$refs['N-form'].getformFields()
            console.log(data1, data2)
        },
        handleCurrentChange(a1, a2) {
            console.log(a1, a2)
            // this.$refs["N-dialog"].openNDialog();
        },
        handleSelectionChange(a1, a2) {
            console.log(a1, a2)
            // this.$refs["N-dialog"].openNDialog();
        }
    }
}
</script>

<style lang="scss" scoped>
.NTable {
    padding: 5px 10px;
}
.el-dialog {
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.el-dialog__body {
    padding-top: 9px;
}
::v-deep.searchBox {
    display: flex;
    .el-form-row {
        justify-content: flex-start;
    }

    .el-form-item {
        width: 19%;
        max-width: 325px;
        min-width: 250px;
        margin-left: 9px;
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

::v-deep.operateBox {
    &.btns {
        display: flex;
        justify-content: flex-start;
        padding-bottom: 3px;
        // border: 1px solid #ccc;
    }
}
::v-deep.tagsBox {
    .el-tabs--border-card > .el-tabs__content {
        padding: 0px;
    }
    .el-tabs--border-card {
        box-shadow: none;
    }
}
::v-deep.tableBox {
    .el-table td,
    .el-table th {
        font-size: 12px;
        padding: 5px 0;
    }
}
::v-deep.pageBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 15px;
    .colInput {
        input {
            border: none;
            background: rgb(255, 208, 80);
        }
    }
}
</style>

