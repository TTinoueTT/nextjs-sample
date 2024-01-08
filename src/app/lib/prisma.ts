import { PrismaClient } from "@prisma/client";

export class PrismaClientSingleton extends PrismaClient {
    private static instance: PrismaClientSingleton;

    // 外部からインスタンスを生成できないように private にする
    private constructor() {
        super(); // 親クラスのコンストラクターを呼び出す
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new PrismaClientSingleton();
        }

        return this.instance;
    }
}
