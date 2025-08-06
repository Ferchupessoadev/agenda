<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->enum('priority', ['low', 'medium', 'high']);
            $table->foreignId('required_by')->references('id')->on('users');
            $table->foreignId('approved_by')->nullable()->references('id')->on('users');
            $table->string('equipment');
            $table->foreignId('classroom_id')->constrained();
            $table->string('description');

            $table->enum('approval_status', ['pending', 'approved', 'rejected']);
            $table->enum('work_status', ['Repair', 'awaiting parts', 'No solution']);

            $table->string('description_solution');
            $table->foreignId('supervised_by')->references('id')->on('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
